import { NavLink } from "react-router-dom";
import '../styles/Home.css';

function Home() {
    return (
        <>
        <div>
        <main>
        <div className="home-flex-wrapper">
        <div className="home-flex-container">
        <section className="home-grid-container">
        <NavLink to="/about">
        <div className="card card-1">
        <img className="img1" src="images/cloud-moon-svgrepo-com.svg"/>
        </div>
        </NavLink>
        <NavLink to="/resume">
        <div className="card card-2"></div>
        </NavLink>
        <NavLink to="/portfolio">
        <div className="card card-3"></div>
        </NavLink>
        </section>
        </div>
        </div>
        </main>
        </div>
        </>
    )
}

export default Home;