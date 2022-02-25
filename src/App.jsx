import styled from "styled-components";
import { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Price from "./components/Price";
import Service from "./components/Service";


const Conatiner = styled.div `
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Shape = css `
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;

const IntroShape = styled.div `
${Shape}
clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 50% 100%);
background-color: lightskyblue;
`;


const FeatureShape = styled.div `
${Shape}
clip-path: polygon(0 0,50% 0%, 33% 100%, 0 100%);
background-color: lightpink;
`;

const ServiceShape = styled.div `
${Shape}
clip-path: polygon(0 0,33% 0%, 33% 100%, 0 100%);
background-color: lightskyblue;
`;

const PriceShape = styled.div `
${Shape}
clip-path: polygon(33% 0,100% 0%, 100% 100%, 67% 100%);
background-color: lightpink;

`;





function App() {

  const smallScreen = window.screen.width <= 480 ? true : false ;
  
  return (    
    <>
  <Conatiner >
     <NavBar  />
     <Intro />
     <IntroShape />
  </Conatiner>
  <Conatiner>
    <Feature />
    <FeatureShape />
  </Conatiner>
  <Conatiner>
    <Service />
   {!smallScreen && <ServiceShape /> }
  </Conatiner>
    <Conatiner>
        <Price />
        <PriceShape />
    </Conatiner>
    <Conatiner>
        <Contact />
        <Footer />
    </Conatiner>
  </>
   
  );
}

export default App;
