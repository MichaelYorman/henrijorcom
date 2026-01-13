import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <>
    <div>
    <div className="site">
    <Router>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="portfolio" element={<Portfolio/>} />
</Routes>
</Router>
    </div>
    </div>
    </>
  )
}

export default App
