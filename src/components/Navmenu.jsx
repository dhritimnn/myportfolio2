function NavMenu() {
    return (
        <div className="Navbar">
            <h2>Dhritiman</h2>
            <div className="Nav-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blogs</a>
                <a href="/">Contact</a>
            </div>
            <button className="Nav-listbtn">
                <svg width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <rect x="2.5" y="3" width="11" height="1" rx="0.5" />
                    <rect x="2.5" y="7" width="11" height="1" rx="0.5" />
                    <rect x="2.5" y="11" width="11" height="1" rx="0.5" />
                </svg>
            </button>



        </div>
    )
}

export default NavMenu;