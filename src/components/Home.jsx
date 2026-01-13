import { NavLink } from "react-router-dom";
import '../styles/Home.css';

function Home() {
    return (
        <>
        <div>
        <main>
        <div className="flex-wrapper">
        <div className="flex-container">
        <section className="grid-container">
        <NavLink to="/about">
        <div className="card-1"></div>
        </NavLink>
        <NavLink to="/resume">
        <div className="card-2"></div>
        </NavLink>
        <NavLink to="/portfolio">
        <div className="card-3"></div>
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