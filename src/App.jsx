import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <div>
    <div className="site">
    <Router>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="resume" element={<Resume/>} />
    <Route path="portfolio" element={<Portfolio/>} />
</Routes>
</Router>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default App
