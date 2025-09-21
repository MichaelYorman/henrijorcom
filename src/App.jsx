import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import MainComponent from "./MainComponent";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import GlobalStyle from "./GlobalStyle";

function App() {

  return (
    <>
    <div>
<Router>
<GlobalStyle/>
<Routes>
  <Route element={<MainComponent/>}>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="resume" element={<Resume/>} />
    <Route path="portfolio" element={<Portfolio/>} />
  </Route>
</Routes>
</Router>
    </div>
    </>
  )
}

export default App
