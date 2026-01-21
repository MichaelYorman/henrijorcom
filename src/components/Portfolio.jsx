import { NavLink } from "react-router-dom";
import '../styles/General.css';
import '../styles/Portfolio.css';
import { useState } from "react";

function Portfolio() {

    const d = new Date();
    let year = d.getFullYear();
    // UseState for Filter GET request
    const [myFilters,setMyFilters]=useState({
        projectName:"",
        projectSingleYear:"",
        projectTimeLine:"",
        projectStatus:""
    })

    const [yearFilterState,setYearFilterState]=useState(false);
    const [timeLineFilterState,setTimeLineFilterState]=useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setMyFilters({
      ...myFilters,
      [name]: value
    });
  };

  const handleYearSelection=(e)=> {
    const {name,value}=e.target;
    if(value==="year") {
        setYearFilterState(true)
        setTimeLineFilterState(false)
    } else if (value==="timeline") {
        setYearFilterState(false)
        setTimeLineFilterState(true)
    }
  };
console.log(myFilters.projectName)
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
        <div className="portfolio-filter-box">
        <form>
        <input className="portfolio-name-filter-input" type="text"
        name="projectName"
        value={myFilters.projectName}
        placeholder="Search project by name..."
        onChange={handleFilterChange}>
        </input>
        <div>
        <label name="year">Filter by specific year</label>
        <input type="radio" name="YearTypeFilter" value="year"/>
        <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}></input>
        </div>
        <div>
        <label name="year">Filter by timeline</label>
        <input type="radio" name="YearTypeFilter" value="timeline"/>
        </div>
        <div>
         <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}>
        </input>
        <span>-</span>
        <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}></input>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Portfolio;