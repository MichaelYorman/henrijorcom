import { NavLink } from "react-router-dom";
import '../styles/General.css';
import '../styles/About.css';

function About() {
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
        <div className="about-flex-container">
        <div className='info-box-container info-box-container-1'>
        <div className="info-box-header info-box-header-1">Who I am?</div>
        <div className="info-box info-box-1">
        <img className="info-box-image info-box-image-1" img src="/icons/user.svg" alt="Gear logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-2'>
        <div className="info-box-header info-box-header-2">What I do?</div>
        <div className="info-box info-box-2">
        <img className="info-box-image info-box-image-2" img src="/icons/gear.svg" alt="Gear logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-3'>
        <div className="info-box-header info-box-header-3">What I know?</div>
        <div className="info-box info-box-3">
        <img className="info-box-image info-box-image-3" img src="/icons/book.svg" alt="Book logo"></img>
        <img className="info-box-skill-icon info-box-skill-icon-1" img src="icons/skills/css3.svg" alt="CSS3 logo"></img>
        <img className="info-box-skill-icon info-box-skill-icon-1" img src="icons/skills/javascript.svg" alt="Javascript logo"></img>
        <img className="info-box-skill-icon info-box-skill-icon-1" img src="icons/skills/mysql.svg" alt="Mysql logo"></img>
        <img className="info-box-skill-icon info-box-skill-icon-1" img src="icons/skills/python.svg" alt="Python logo"></img>
        <img className="info-box-skill-icon info-box-skill-icon-1" img src="icons/skills/react.svg" alt="React logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-4'>
        <div className="info-box-header info-box-header-4">What I want to do?</div>
        <div className="info-box info-box-4">
            <img className="info-box-image info-box-image-4" img src="/icons/cloud.svg" alt="Cloud logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-5'>
        <div className="info-box-header info-box-header-5">What are my interests?</div>
        <div className="info-box info-box-5">
        <img className="info-box-image info-box-image-5" img src="/icons/heart.svg" alt="User logo"></img>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default About;