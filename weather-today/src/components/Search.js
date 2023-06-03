import '../App.css';
function Search({ handleKeyword, doSearch,doLastSearch,name }) {
    return (
        <div className="my-form">
            <input className="my-form-input text-xl" name="keyword" id="keyword" onChange={handleKeyword} placeholder='City Name' value={name} />            
            <button onClick={doSearch} className='btn-search'>Search</button>
            <button onClick={doLastSearch} className='btn-last-search'>Old search</button>
        </div>
    );
}
export default Search;