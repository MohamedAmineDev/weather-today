import Search from "./Search";
import '../App.css';
function WeatherPanel(){
    const beforeSearchingText="No city was selected !";
    const waitingString="Loading...";
    const errorString="No data was found !";
    function getKeyWord(e){
        console.log(e.target.value);
        }
        function doSearching(e){}
    return (
        <div className="my-weather-panel">
            <Search handleKeyword={getKeyWord} doSearch={doSearching}  />
            <h2>{beforeSearchingText}</h2>
        </div>
    );
}
export default WeatherPanel;