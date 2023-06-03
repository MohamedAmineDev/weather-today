import '../App.css';
function Search({handleKeyword, doSearch}) {
    return (
        <div className="my-form">
            <input className="my-form-input" name="keyword" id="keyword" onChange={handleKeyword} placeholder='City' />
            <button onClick={doSearch} className='btn'>Search</button>
        </div>
    );
}
export default Search;