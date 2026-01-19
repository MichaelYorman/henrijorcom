import { NavLink } from "react-router-dom";
import '../styles/About.css';

function About() {
    return (
        <>
        <div>
        <div className="about-flex-wrapper">
        <div className="about-nav-bar">
        <NavLink to="/">
        <img className="about-nav-item about-nav-item-1" img src="/icons/home.svg" alt="Home cottage logo">
        </img>
        </NavLink>
        <NavLink to="/resume">
        <img className="about-nav-item about-nav-item-1" img src="/icons/resume.svg" alt="Paper and pen logo"></img>
        </NavLink>
        <NavLink to="/portfolio">
        <img className="about-nav-item about-nav-item-1" img src="/icons/folder.svg" alt="Folder logo"></img>
        </NavLink>
        </div>
        <div className="about-flex-container">
        <div className='info-box-container info-box-container-1'>
        <div className="info-box-header info-box-header-1">Who I am?</div>
        <div className="info-box info-box-1">
        <img className="info-box-image info-box-image-1" img src="/icons/about/user.svg" alt="User logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-2'>
        <div className="info-box-header info-box-header-2">What I do?</div>
        <div className="info-box info-box-2">
        <img className="info-box-image info-box-image-1" img src="/icons/about/gear.svg" alt="Gear logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-3'>
        <div className="info-box-header info-box-header-3">What do I know?</div>
        <div className="info-box info-box-3">
        <img className="info-box-image info-box-image-1" img src="/icons/about/book.svg" alt="Book logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-4'>
        <div className="info-box-header info-box-header-4">What I want to do?</div>
        <div className="info-box info-box-4">
            <img className="info-box-image info-box-image-1" img src="/icons/about/cloud.svg" alt="Cloud logo"></img>
        </div>
        </div>
        <div className='info-box-container info-box-container-5'>
        <div className="info-box-header info-box-header-5">What are my interests?</div>
        <div className="info-box info-box-5">
        <img className="info-box-image info-box-image-1" img src="/icons/about/heart.svg" alt="User logo"></img>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default About;