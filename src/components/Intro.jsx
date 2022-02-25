import React from 'react'
import styled from 'styled-components'
import picture from '../assets/Women.png'
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div `
height: calc(100vh - 50px);
display: flex;
padding: 20px;
@media only screen and (max-width:480px) {
  flex-direction: column;
}
` ;

const Left = styled.div `
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width:480px) {
  width: 100%;
  height: 100%;
}

` ;

const Title = styled.h1 `
width: 60%;
font-size: 60px;
@media only screen and (max-width:480px) {
  width: 100%;
  font-size: 35px;
}

` ;

const Desc= styled.p `
width: 60%;
font-size: 20px;
margin-top: 20px;
@media only screen and (max-width:480px) {
  width: 100%;
}
` ;

const Info = styled.div `
width: 60%;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:480px) {
  width: 100%;
  flex-direction: column;
}
` ;

const Button = styled.button `
padding: 15px;
background-color: teal;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
cursor: pointer;
letter-spacing: 2px;
@media only screen and (max-width:480px) {
margin-bottom: 20px;
}
`;


const Contact = styled.div `
display: flex;
flex-direction: column;
` ;

const Phone = styled.span `
color: #f0667d;
font-weight: bold;
margin-left: 15px;
`;

const ContactText = styled.span `
color: gray;
margin-top: 5px;
margin-left: 15px;
`;

const Right = styled.div `
width: 40%;
@media only screen and (max-width:480px) {
  display: none;
}
` ;

const Image  = styled.img `
width: 100%;
`;




function Intro() {
  return (
    <Container>
        <Left> 
        <Title> Adventures in creative age </Title> 
        <Desc> We believe that designing products and services in close partnership with our clinets
         is the only way to have a real impact on their business.</Desc>
        <Info>
            <Button> START A PROJECT </Button>
            <Contact>
                    <Phone> +216 52 33 01 63 </Phone>
                    <ContactText> For Any Questions or concern CALL US NOW ! </ContactText>
            </Contact>
        </Info>
        </Left>
        <Right> <Image src={picture} />   </Right>
        <AnimatedShapes />
        
        
    </Container>
  )
}

export default Intro