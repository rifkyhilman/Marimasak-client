import { useState } from "react";

function Navbar() {
    const[showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "kategori",
            path: "/"
        },
        {
            name: "About Us",
            path: "/"
        }
    ]
    return (
        <div className="navbar container">
            <a href="#!" className="logo">Marimasak</a>
            <div className="nav-links">
                {links.map(link => (
                    <a href="#!" key={link.name}>{link.name}</a>  
                )) }
                {/* <a href="#!" className="active">Home</a>
                <a href="#!">Kategori</a>
                <a href="#!">About Us</a> */}
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;