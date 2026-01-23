import '../../styles/Portfolio/Filter.css'
import { useState } from "react";

function Filter() {

        const d = new Date();
        let year = d.getFullYear();

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

    return (
        <>
        <div>
         <div className="portfolio-filter-box">
        <img className="portfolio-filter-box-image"src="/icons/filter.svg" alt="Filter logo"></img>
        <form>
        <label name="year">Filter by name</label>
        <input className="portfolio-name-filter-input" type="text"
        name="projectName"
        value={myFilters.projectName}
        placeholder="Search project by name..."
        onChange={handleFilterChange}>
        </input>
        <label name="year">Filter by specific year</label>
        <span>
        <input type="radio" name="YearTypeFilter" value="year"/>
        <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}></input>
        </span>
        <label name="year">Filter by timeline</label>
        <span>
        <input type="radio" name="YearTypeFilter" value="timeline"/>
         <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}>
        </input>
        <span> - </span>
        <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        value={year}></input>
        </span>
        <label for="status">Status:</label>
<select id="status" name="projectStatus">
  <option value="">-- Select status --</option>
  <option value="planned">Planned</option>
  <option value="inProgress">In Progress</option>
  <option value="completed">Completed</option>
  <option value="onHold">On Hold</option>
</select>
        <span>
        <button className="portfolio-setfilter-button">Filter</button>
        <span></span>
        <button className="portfolio-clearfilter-button">Clear all filters</button>
        </span>
        </form>
        </div>   
        </div>
        </>
    )
}

export default Filter