import Search from "./Search";
import '../App.css';
import React from "react";
import WeatherLine from "./WeatherLine";
import Column from "./Column";
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
    const sessionName="last_search";
    function fetchData() {
        fetch(`${url}/${countryName}`)
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch(() => setError(true))
    }
    React.useEffect(() => {
        if (isloading) {
            setStringToDisplay(waitingString);
            setFound(false);
            fetchData();
        }
        else {
            setStringToDisplay("");
        }
    }, [isloading]);
    React.useEffect(() => {
        if (error) {
            setStringToDisplay(errorString);
        }
    }, [error])
    React.useEffect(() => {
        setError(false);
        setIsLoading(false);
        if (data != null) {
            setFound(true);
            localStorage.setItem(sessionName,countryName);
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
    function getKeyWord(e) {
        console.log(e.target.value);
        setCountryName(e.target.value);
    }
    function doSearching(e) {
        //alert("Hello !");
        setIsLoading(true);
    }
    function doLastSearching(){
        let name=localStorage.getItem(sessionName);
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
            {found ? (<div>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-400 dark:text-gray-400 mb-20">
                        <thead class="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Information
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    value
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Attribute Icon
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Column attributeName={`Temperature`} response={`${data.temperature}`} iconImg={`https://cdn-icons-png.flaticon.com/512/103/103945.png`} />
                            <Column attributeName={`Wind`} response={`${data.wind}`} iconImg={`https://cdn-icons-png.flaticon.com/512/192/192756.png`} />
                            <Column attributeName={`Description`} response={`${data.description}`} iconImg={`${icon}`} />
                            
                        </tbody>
                    </table>
                </div>

                
            </div>) : (<div>

            </div>)}
        </div>
    );
}
export default WeatherPanel;