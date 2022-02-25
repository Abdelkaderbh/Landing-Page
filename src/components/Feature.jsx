import React from 'react'
import styled from 'styled-components'
import App from '../assets/mobile.png'
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div `
display: flex;
@media only screen and (max-width:480px) {
 flex-direction:column;
 padding: 30px 20px;
}
`;

const Right = styled.div `
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width:480px) {
 width:100%;
}
` ;

const Image = styled.img `
width: 80%;
` ;

const Left  = styled.div `
width: 50%;
@media only screen and (max-width:480px) {
 display:none;
}
` ;

const Title = styled.span `
font-size: 70px;
@media only screen and (max-width:480px) {
  font-size: 35px;

}
` ;
const SubTitle = styled.span `
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;
` ;
const Desc = styled.p `
font-size: 20px;
color: #777;
margin-top: 30px;
` ;
const Button = styled.button `

width: 150px;
border: 2px solid white;
padding: 15px 20px ;
background-color: lightpink;
border-radius: 20px;
color: white;
font-size: 15px;
font-weight: bold;
cursor: pointer;
margin-top: 20px;
` ;



function Feature() {
  return (
    <Container>
        <Left> <Image src={App} />  </Left>
        <Right>
          <Title>
            <b>Professional</b> Design <br/>
            <b>Good </b> Business
          </Title>
          <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>
          <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis ornare mi, non volutpat mauris. Integer ac egestas neque.
                Quisque faucibus justo at tortor faucibus venenatis. Suspendisse ultrices lacus
                a libero cursus consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos</Desc>
          <Button> Learn More </Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature