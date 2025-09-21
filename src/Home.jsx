import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
        <div>
        <h1>Welcome to my homepage!</h1>

        <p>I will add more stuff here in the future!</p>
        <p>In the meantime...</p>
        <p>You can check my other pages</p>
        <ul>
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/about">Resume</NavLink></li>
        <li><NavLink to="/resume">Portfolio</NavLink></li>
        </ul>
        </div>
        </>
    )
}

export default Home;