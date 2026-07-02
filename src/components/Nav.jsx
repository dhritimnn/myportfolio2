function Navbar(prop) {
    return (
        <div className="Navbar">
            <h2>Dhritiman</h2>
            <div className="Nav-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blogs</a>
                <a href="/">Contact</a>
            </div>
            <button className="Nav-listbtn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg></button>
        </div>
    )
}

export default Navbar;