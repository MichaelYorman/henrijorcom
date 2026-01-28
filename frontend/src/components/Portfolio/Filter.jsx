import '../../styles/Portfolio/Filter.css'
import { useState } from "react";

function Filter() {

        const d = new Date();
        let year = d.getFullYear();

    const [myFilters,setMyFilters]=useState({
        projectName:"",
        projectSingleYear:"",
        projectTimeLineStartDate:"",
        projectTimeLineEndDate:"",
        projectStatus:""
    })

    const [projectSingleYear,setProjectSingleYear]=useState(year);
    const [projectTimeLineStartDate,setProjectTimeLineStartYear]=useState(year);
    const [projectTimeLineEndDate,setProjectTimeLineEndYear]=useState(year);
    const [singleYearFilterIsUsed,setSingleYearFilterIsUsed]=useState();
    const [timelineFilterIsUsed,setTimelineFilterIsUsed]=useState();
    //huom! year filterit pitää olla portinvartijoina jos muokkaa lukuja mutta ei ole palleroa klikannut

      const handleNameChange = (e) => {
    const { name, value } = e.target;
    setMyFilters({
      ...myFilters,
      [name]: value
    });
  };

  const changeSingleYear=(e)=>{
    const {name,value}=e.target;
    if(singleYearFilterIsUsed) {
    setProjectSingleYear(value);
    setMyFilters({
      ...myFilters,
    [name]:value
      })
    }
  }

    const changeTimeLineStartYear=(e)=>{
    if(timelineFilterIsUsed) {
    const newValue=e.target.value;
    setProjectTimeLineStartYear(newValue)
    }
  }
    const changeTimeLineEndYear=(e)=>{
    if(timelineFilterIsUsed) {
      const newValue=e.target.value;
      setMyFilters({
        ...myFilters,
        projectTImeLineEndDate:newValue
      })
  }
}

    const changeStatus=(e)=>{
      const {value}=e.target;
      const status="projectStatus"
      setMyFilters({
        ...myFilters,
        [status]:value
      })
    }

    const handleTimeFilterChange=(e)=> {
    const {value}=e.target;
    const singleYear="projectSingleYear"
    const startDate="projectTimeLineStartDate";
    const endDate="projectTimeLineEndDate";
    if(value==="year") {
      setSingleYearFilterIsUsed(true);
      setTimelineFilterIsUsed(false);
        setMyFilters({
      ...myFilters,
      [singleYear]: projectSingleYear,
      [startDate]:"",
      [endDate]:""
    });
    } else if (value==="timeline") {
      setSingleYearFilterIsUsed(false);
      setTimelineFilterIsUsed(true);
              setMyFilters({
      ...myFilters,
      ProjectSingleYear:"",
      ProjectTimeLineStartDate:projectTimeLineStartDate,
      ProjectTimeLineEndDate:projectTimeLineEndDate
    });
      
    }
  };

  console.log("MyFilter",myFilters)
    return (
        <>
        <div>
         <div className="portfolio-filter-box">
        <img className="portfolio-filter-box-image"src="/icons/filter.svg" alt="Filter logo"></img>
        <form>
        <label>Filter by name</label>
        <input className="portfolio-name-filter-input" type="text"
        name="projectName"
        value={myFilters.projectName}
        placeholder="Search project by name..."
        onChange={handleNameChange}>
        </input>
        <label name="year">Filter by specific year</label>
        <span>
        <input type="radio" name="YearTypeFilter" value="year" onClick={handleTimeFilterChange}/>
        <input 
        type="number"
        id="year"
        name="projectSingleYear"
        min="2025"
        max="2100"
        step="1"
        disabled={timelineFilterIsUsed}
        value={projectSingleYear}
        onChange={changeSingleYear}
        ></input>
        </span>
        <label>Filter by timeline</label>
        <span>
        <input type="radio" name="YearTypeFilter" value="timeline" onClick={handleTimeFilterChange}/>
         <input 
        type="number"
        id="year"
        name="year"
        min="2025"
        max="2100"
        step="1"
        disabled={singleYearFilterIsUsed}
        value={projectTimeLineStartDate}
        onChange={changeTimeLineStartYear}
        >
        </input>
        <span> - </span>
        <input 
        type="number"
        id="year"
        min="2025"
        max="2100"
        name="year"
        step="1"
        disabled={singleYearFilterIsUsed}
        value={projectTimeLineEndDate}
        onChange={changeTimeLineEndYear}
        ></input>
        </span>
        <label>Status:</label>
<select id="status" name="projectStatus" onChange={changeStatus}>
  <option value="">-- Select status --</option>
  <option value="Planned">Planned</option>
  <option value="in Progress">In Progress</option>
  <option value="Paused">Paused</option>
  <option value="Completed">Completed</option>
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