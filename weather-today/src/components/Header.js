import '../App.css';
// The header of the application
function Header() {
    return (
        <header className="my-header">
            <h1 className="my-header-text">
                Weather Today
                <span className="my-header-icon">&#x2601;</span>
            </h1>
        </header>
    )
}
export default Header;