import axios from "axios"
import { useState,useEffect } from "react";
import '../../styles/Portfolio/List.css';

function List() {
const [portfolioData,setPortfolioData]=useState([])

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
    return(
        <>
        <div>
            <div className="portfolio-list-box">
            <label>Portfolio List</label>
            <div className="portfolio-list-content">
            {portfolioData.length > 0 ? portfolioData.map(item => (
                <div className="portfolio-list-item" key={item.id}>
                <p>{item.name}</p>
                </div>
          )) : (
            <div className="portfolio-list-item">
            <h4>You have nothing here yet...</h4>
            </div>)}
            </div>
            </div>
        </div>
        </>
    )
}

export default List;