import { NavLink } from "react-router-dom";
import '../../styles/General/General.css';
import '../../styles/Portfolio/Portfolio.css';
import { useState,useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import List from "./List"
import Preview from "./Preview";

function Portfolio() {

const [portfolioData,setPortfolioData]=useState([]);
const [currentSelectedItem,setCurrentSelectedItem]=useState(null);
const [loadError, setLoadError] = useState(false);
const selectedItemData=portfolioData.find((item)=>item.id===currentSelectedItem);

// Fetch portfolio data
  useEffect(() => {
    const controller= new AbortController(); //
    const fetchData=async()=>{
      try {
        const response=await axios.get("http://localhost:3000/api/list",{
        signal:controller.signal
      });
        setPortfolioData(response.data.data);
      } catch (err) {
        if(err.name!=="CanceledError") {
        console.error("Error fetching data:",err);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  },[]);
console.log(currentSelectedItem)
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
        <Preview
        id={currentSelectedItem}
        data={selectedItemData}
        error={loadError}
        />
        <List currentSelectedItem={currentSelectedItem}
        setCurrentSelectedItem={setCurrentSelectedItem}
        items={portfolioData}
        />

        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Portfolio;