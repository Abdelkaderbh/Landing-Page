import React from 'react'
import styled from 'styled-components'
import Search from "../assets/send.png"



const Container = styled.div `
width: 100px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;

box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);

@media only screen and (max-width:480px) {
 width:50px;
}

` ;

const Image = styled.img `
width: 20px;
`;

const Text = styled.span `
margin-top: 10px;
text-align: center;
@media only screen and (max-width:480px) {
 font-size:14px;
}
` ;


function MiniCard() {
  return (
    <Container>
        <Image src = {Search} />
        <Text> "Neque porro quisquam est qui dolorem ipsum ..." </Text>
    </Container>
  )
}

export default MiniCard