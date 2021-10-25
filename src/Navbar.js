import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Sam-Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#05b0c7",
                    borderRadius: "5px"
                }}>New Blog</Link>

            </div>
        </nav>
    );
}

export default Navbar;