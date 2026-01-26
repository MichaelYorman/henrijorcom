import { NavLink } from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import '../styles//General/General.css';
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
       <img className="home-image" src="/icons/user.svg" alt="User logo"></img>
        </div>
        </NavLink>
        <NavLink to="/resume">
        <div className="card card-2">
        <img className="home-image" src="/icons/resume.svg" alt="Paper and pen logo"></img> 
        </div>
        </NavLink>
        <NavLink to="/portfolio">
        <div className="card card-3">
        <img className="home-image" src="/icons/folder.svg" alt="Folder logo"></img>
        </div>
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