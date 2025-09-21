import styled from "styled-components";

const SkillLogo=styled.img`
width:50px;
height:auto;
`;
const SkillDiv=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;
const PortfolioDiv=styled.div`
h1{text-decoration:underline}
`;

function Resume() {
    return (
        <>
        <div>
        <PortfolioDiv>
        <br/>
        <div>
        <h1>Occupation</h1>
        <p>Trainee full-stack developer with an interest in aesthetic design and building attractive websites.</p>
        </div>
        <br/>
        <div>
        <h1>Education</h1>
        <h2>Programming Specialist</h2>
        <p>Pohjois-Karjalan koulutuskuntayhtymä Riveria</p>
        <p>2025-ongoing</p>
        <h2>Media Service Producer - 3D Production</h2>
        <p>Pohjois-Karjalan koulutuskuntayhtymä Riveria</p>
        <p>2017-2019</p>
        </div>
        <br/>
        <h1>Skills</h1>
        <SkillDiv>
        <SkillLogo src="/icons/html5.svg" alt="Html5 logo"/>
        <SkillLogo src="/icons/css3.svg" alt="Css3 logo"/>
        <SkillLogo src="/icons/javascript.svg" alt="Javascript logo"/>
        <SkillLogo src="/icons/react.svg" alt="React logo"/>
        <SkillLogo src="/icons/mysql.svg" alt="Mysql logo"/>
        </SkillDiv>
        </PortfolioDiv>
        </div>
        </>
    )
}

export default Resume;