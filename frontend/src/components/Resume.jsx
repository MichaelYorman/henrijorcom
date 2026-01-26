import { NavLink } from "react-router-dom";
import '../styles/General/General.css';
import '../styles/Resume.css';

function Resume() {
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
        <div className="resume-flex-container">
        <div className="profile-picture-frame">
        <img className="profile-picture-container" src="/icons/folder.svg" alt="My personal profile picture"></img>
        </div>
        <div>
        <div className="resume-info-box-header resume-info-box-header-1">Name</div>
        <div className="resume-info-box resume-f">Henri Jormanainen</div>
        </div>
        <div>
        <div className="resume-info-box-header resume-info-box-header-2">Date of Birth</div>
        <div className="resume-info-box">1997</div>
        </div>
        <div>
        <div className="resume-info-box-header resume-info-box-header-3">Country Of Origin</div>
        <div className="resume-info-box">Finland</div>
        </div>
        <div>
        <div className="resume-info-box-header resume-info-box-header-4">Languages</div>
        <div className="resume-info-box">Finnish, English</div>
        </div>
        <div>
        <div className="resume-info-box-header resume-info-box-header-5">Profession</div>
        <div className="resume-info-box">Website Programmer</div>
        </div>
        <div className="resume-info-box-header resume-info-box-header-6">Education</div>
        <div className="resume-info-box resume-info-box-1">Pohjois-Karjalan koulutuskuntayhtymä Riveria</div>
        <div className="resume-info-box resume-info-box-2">Programming Specialist</div>
        <div className="resume-info-box resume-info-box-3">2025-ongoing</div>
        <div className="resume-info-box resume-info-box-4">Pohjois-Karjalan koulutuskuntayhtymä Riveria</div>
        <div className="resume-info-box resume-info-box-5">Media Service Producer - 3D Production</div>
        <div className="resume-info-box resume-info-box-6">2017-2019</div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Resume;