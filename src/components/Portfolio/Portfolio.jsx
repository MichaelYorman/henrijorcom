import { NavLink } from "react-router-dom";
import '../../styles/General/General.css';
import '../../styles/Portfolio/Portfolio.css';
import Filter from "./Filter";
import List from "./List"
import Preview from "./Preview";

function Portfolio() {
    // UseState for Filter GET request

    return (
        <>
        <div>
        <div className="flex-wrapper">
        <div className="nav-bar">
        <NavLink to="/">
        <img className="nav-item" src="/icons/home.svg" alt="Home cottage logo">
        </img>
        </NavLink>
        <NavLink to="/about">
        <img className="nav-item" src="/icons/user.svg" alt="User Logo"></img>
        </NavLink>
        <NavLink to="/resume">
        <img className="nav-item" src="/icons/resume.svg" alt="Paper and pen logo"></img>
        </NavLink>
        <NavLink to="/portfolio">
        <img className="nav-item" src="/icons/folder.svg" alt="Folder logo"></img>
        </NavLink>
        </div>
        <div className="portfolio-flex-container">
        <div className="portfolio-grid-container">
        <Filter/>
        <Preview/>
        <List/>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Portfolio;