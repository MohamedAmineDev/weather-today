import '../App.css';
function Column({ attributeName, response,iconImg  }) {
    return (
        <tr class="border bg-blue-500">
            <th scope="row" class="p-5 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl"> {attributeName}
            </th>

            <td class="p-5 text-white text-xl">
               {response}
            </td>
            <td class="p-5 text-white text-xl">
               <img src={iconImg} className='img' />
            </td>
        </tr>
    );
}
export default Column;