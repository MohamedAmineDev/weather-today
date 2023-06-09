import Search from "./Search";
import '../App.css';
import React from "react";
import Row from "./Row";
import WeatherReport from "./WeatherReport";
// The component which contains the panel
function WeatherPanel() {
    const beforeSearchingText = "No city was selected !";
    const waitingString = "Loading...";
    const errorString = "No data was found !";
    let [stringToDisplay, setStringToDisplay] = React.useState(beforeSearchingText);
    const [isloading, setIsLoading] = React.useState(false);
    const sunny = "https://cdn-icons-png.flaticon.com/512/979/979585.png";
    const rainy = "https://cdn-icons-png.flaticon.com/512/4150/4150897.png";
    const clouded = "https://cdn-icons-png.flaticon.com/512/7084/7084486.png"
    const url = "https://goweather.herokuapp.com/weather";
    const [countryName, setCountryName] = React.useState("");
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [found, setFound] = React.useState(false);
    const [icon, setIcon] = React.useState("");
    const sessionName = "last_search";
    const loadingImage = "https://media.tenor.com/whis5JX19ycAAAAC/loading-load.gif";
    // Fetch data from the api
    function fetchData() {
        fetch(`${url}/${countryName}`)
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch(() => {
                setError(true);
                setIsLoading(false);
            });
    }
    // Define the actions when then isloading is updated
    React.useEffect(() => {
        if (isloading) {
            //setStringToDisplay(waitingString);
            setFound(false);
            fetchData();
        }
        else {
            if (found) {
                setStringToDisplay("");
            }
            else {
                setStringToDisplay(beforeSearchingText);
            }

        }
    }, [isloading]);
    // Define the actions when there is an error
    React.useEffect(() => {
        if (error) {
            setStringToDisplay(errorString);
        }
    }, [error]);
    // Define the actions when the data is updated !
    React.useEffect(() => {
        setError(false);
        setIsLoading(false);
        if (data != null) {
            setFound(true);
            localStorage.setItem(sessionName, countryName);
            if (data.description.toLowerCase() === "sunny") {
                setIcon(sunny);
            }
            else if (data.description.toLowerCase() === "rainy") {
                setIcon(rainy);
            }
            else {
                setIcon(clouded);
            }
        }
        console.log(data);
    }, [data]);
    // Fetch the country name from the input field
    function getKeyWord(e) {
        console.log(e.target.value);
        setCountryName(e.target.value);
    }
    // Update the isloading attribute so the data fetch starts
    function doSearching(e) {
        //alert("Hello !");
        setIsLoading(true);
    }
    // Fetchs the country name from the local storage and starts the data fechting by updating isloading
    function doLastSearching() {
        let name = localStorage.getItem(sessionName);
        localStorage.removeItem(sessionName);
        console.log(name);
        //setTimeout(()=>{},1000)
        setCountryName(name);
        setIsLoading(true);
    }
    return (
        <div className="my-weather-panel">
            <Search handleKeyword={getKeyWord} doSearch={doSearching} doLastSearch={doLastSearching} name={countryName} />
            <h2>{stringToDisplay}</h2>
            {isloading ?
                <img src={loadingImage} className='loading' alt={stringToDisplay} />
                :
                <span></span>
            }
            {found ? (<div>

                <WeatherReport information={data} imgIcon={icon} />
            </div>) : (<div>

            </div>)}
        </div>
    );
}
export default WeatherPanel;