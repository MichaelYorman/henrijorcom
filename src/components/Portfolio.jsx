import { NavLink } from "react-router-dom";
import '../styles/General.css';
import '../styles/About.css';

function Portfolio() {
    return (
        <>
        <div>
        <div className="flex-wrapper">
        <div className="nav-bar">
        <NavLink to="/">
        <img className="nav-item" img src="/icons/home.svg" alt="Home cottage logo">
        </img>
        </NavLink>
        <NavLink to="/about">
        <img className="nav-item" img src="/icons/user.svg" alt="User Logo"></img>
        </NavLink>
        <NavLink to="/resume">
        <img className="nav-item" img src="/icons/resume.svg" alt="Paper and pen logo"></img>
        </NavLink>
        <NavLink to="/portfolio">
        <img className="nav-item" img src="/icons/folder.svg" alt="Folder logo"></img>
        </NavLink>
        </div>
        <div className="flex-container">
        <div className="info-box"></div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Portfolio;