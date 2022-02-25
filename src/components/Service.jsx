import React from 'react'
import styled from 'styled-components'
import Pic from '../assets/myPicture.png'
import MiniCard from './MiniCard';
import Play from '../assets/play.png'
import { useState } from 'react';
import How from '../assets/Vid.mp4'



const Container = styled.div `
display: flex;
height: 100%;
@media only screen and (max-width:480px) {
flex-direction: column;
}

` ;

const Left = styled.div `
width: 50%;
display: flex;
position: relative;
@media only screen and (max-width:480px) {
 display:none;
}
` ;

const Image = styled.img `
display: ${(props)=> props.open && "none"};
height: 100%;
margin-left: -100px;
` ;

const Video = styled.video `
display: ${(props) => !props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
right: -100px ;
margin: auto;
overflow: hidden;
@media only screen and (max-width:480px) {
 width: 100%;
}
`;

const Right = styled.div `
width: 50%;
@media only screen and (max-width:480px) {
 width:100%;
}
` ;


const Wrapper = styled.div `
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width:480px) {
 padding:20px;
}
`;

const Title = styled.h1 `
`;

const Desc = styled.p `
font-size: 20px;
margin-top: 20px;
color: #555;
`;


const CardContainer = styled.div `
display: flex;
justify-content: space-between;
margin-top: 50px;
`;


const Button = styled.div `
width: 180px;
border:none;
display: flex;
border-radius: 10px;
background-color: lightskyblue;
color: white;
font-size: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
align-items: center;
`;

const Icon = styled.img `
width: 20px;
margin-right: 10px;
`;

const Modal = styled.div `
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba (0,0,0,0.5);
` ;

const CloseButton = styled.button `
position: absolute;
background-color: white;
padding: 5px;
border: none;
border-radius: 5px;
right: 5px;
top :30%;
` ;


function Service() {


  const [open,setOpen] = useState (false);
  const smallScreen = window.screen.width <= 480 ? true : false ;

  return (
    <>
      <Container>
            <Left>
              <Image open={open} src={Pic} />  
            <Video  open={open} autoPlay loop controls src={How} />
            </Left>
            <Right>
                <Wrapper>
                  <Title>
                    All You Need To Start is 
                  </Title>

                 <Desc> 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis ornare mi, non volutpat mauris. Integer ac egestas neque.
                Quisque faucibus justo at tortor faucibus venenatis.
                    </Desc>

                    <CardContainer>
                      <MiniCard />
                      <MiniCard />
                      <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}> <Icon src={Play} /> How it Works </Button>
                </Wrapper>               
            </Right>
            {smallScreen && open && (
                      <Modal>
                        <Video  open={open} autoPlay loop controls src={How} />
                        <CloseButton onClick= {()=>setOpen (false)}>  Close </CloseButton>
                      </Modal>


            )}
      </Container>
     
      </>
  )
}

export default Service