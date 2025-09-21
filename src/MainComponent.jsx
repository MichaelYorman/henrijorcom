import styled from "styled-components";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { NavLink} from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 9fr 0.5fr;
  grid-template-rows: auto; 
  align-items: stretch;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

const DecorativeBarLeft = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  background-image:linear-gradient(to top,blue,whitesmoke,snow,whitesmoke,green);
  outline-style:solid;
  outline-color:black;
  outline-width:1px;
`;

const MiddleSection = styled.div`
  grid-column: 2 / 3;
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows:auto auto 1fr auto;
  min-height: 100%;
`;

const DecorativeBarRight = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / -1;
  background-image:linear-gradient(to top,yellow,whitesmoke,snow,whitesmoke,red);
  outline-style:solid;
  outline-color:black;
  outline-width:1px;
`;
const Banner=styled.div`
display:flex;
flex-direction:column;
grid-row:1/2;
padding-left:100px;
height:auto;
background-image:linear-gradient(to right,black,gray,whitesmoke,white);
p{font-size:1.5em;}
`;
const BannerName=styled.div`
display:flex;
flex-direction:column;
color:white;
h1{font-size:3em;}

`;
const NavBar=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-template-rows:1fr;
grid-row:2/3;
width:100%;
height:fit-content;
`;
const Content=styled.div`
display:flex;
margin-left:100px;
margin-top:50px;
margin-bottom:100px;
flex-direction-column;
min-width:100vh;
min-height:fit-content;
grid-row:3/4;
`;
const NavBarItem1=styled(NavLink)`
display:flex;
flex-direction:row;
text-decoration:none;
justify-content:center;
background-color:navy;
p{color:white;font-size:1.2em;}
grid-column:1;;
cursor:pointer;
&:hover{background-color:white;outline-style:solid;outline-color:black;p{color:black;text-decoration:underline}}
`;
const NavBarItem2=styled(NavLink)`
display:flex;
flex-direction:row;
text-decoration:none;
justify-content:center;
background-color:navy;
p{color:white;font-size:1.2em;}
grid-column:2;
cursor:pointer;
&:hover{background-color:white;outline-style:solid;outline-color:black;p{color:black;text-decoration:underline}}
`;
const NavBarItem3=styled(NavLink)`
display:flex;
flex-direction:row;
text-decoration:none;
justify-content:center;
background-color:navy;
p{color:white;font-size:1.2em;}
&:hover{background-color:white;outline-style:solid;outline-color:black;p{color:black;text-decoration:underline}}
grid-column:3;
`;
const NavBarItem4=styled(NavLink)`
display:flex;
flex-direction:row;
text-decoration:none;
justify-content:center;
background-color:navy;
p{color:white;font-size:1.2em;};
&:hover{background-color:white;outline-style:solid;outline-color:black;p{color:black;text-decoration:underline}}
grid-column:4;
`;
function MainComponent() {
    let name="Henri Jormanainen"
    let home="Home";
    let about="About me";
    let resume="Resume";
    let portfolio="Portfolio";

    return (
        <>
        <div>
        <Wrapper>
        <DecorativeBarLeft/>
        <MiddleSection>
        <Banner>
        <BannerName>
        <header>
        <h1>{name}</h1>
        <p>Official Website</p>
        </header>
        </BannerName>
        </Banner>
        <NavBar>
        <NavBarItem1 to="/">
        <p>{home.toUpperCase()}</p>
        </NavBarItem1>
        <NavBarItem2 to="about">
        <p>{about.toUpperCase()}</p>
        </NavBarItem2>
        <NavBarItem3 to="resume">
        <p>{resume.toUpperCase()}</p>
        </NavBarItem3>
        <NavBarItem4 to="/portfolio">
        <p>{portfolio.toUpperCase()}</p>
        </NavBarItem4 >
        </NavBar>
        <Content>
        <main>
        <Outlet/>
        </main>
        </Content>
        <footer>
        <Footer/>
        </footer>
        </MiddleSection>
        <DecorativeBarRight/>
        </Wrapper>
        </div>
        </>
    )
}

export default MainComponent;