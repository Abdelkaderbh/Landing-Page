import React from 'react'
import styled from 'styled-components'

const Square = styled.div  `
width: 60px;
height: 60px;
background-color: teal;
opacity: 0.5;
position: absolute;
top:-60px;
left: -60px;
z-index: -1;
animation: Sq 25s linear alternate infinite;

@keyframes Sq {
    to {
        transform: translate(100vw, 100vh);
    }
}
` ;



const Circle = styled.div  `
width: 100px;
height: 100px;
border-radius: 50%;
background-color: lightpink;
opacity: 0.5;
position: absolute;
top:200px;
left: -100px;
z-index: -1;
animation: Ce 25s linear alternate infinite;

@keyframes Ce {
    to {
        transform: translate(100vw, -100vh);
    }
}
` ;



const Rectangle = styled.div  `
width: 50px;
height: 100px;
background-color: lightskyblue;
opacity: 0.5;
position: absolute;
top:400px;
left: -50px;
z-index: -1;
animation: Re 25s linear alternate infinite;
@keyframes Re {
    to {
        transform: translate(100vw, -50vh);
    }
}
` ;

function AnimatedShapes() {
  return (
      <>
    <Square />
    <Circle />
    <Rectangle />
    </>
  )
}

export default AnimatedShapes