import Row from "./Row";
function WeatherReport({information,imgIcon}){
    return (
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
                            <Row attributeName={`Temperature`} response={`${information.temperature}`} iconImg={`https://cdn-icons-png.flaticon.com/512/103/103945.png`} />
                            <Row attributeName={`Wind`} response={`${information.wind}`} iconImg={`https://cdn-icons-png.flaticon.com/512/192/192756.png`} />
                            <Row attributeName={`Description`} response={`${information.description}`} iconImg={`${imgIcon}`} />

                        </tbody>
                    </table>
                </div>
    );
}
export default WeatherReport;