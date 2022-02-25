import React from 'react'
import styled from 'styled-components'



const Conatiner= styled.div `
margin-right: 15px;
padding: 20px;
box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 31px 0px rgba(0,0,0,0.75);
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
  margin-right: 0;
  margin-bottom: 10px;
  padding: 10px;
}
`;
const PriceContainer= styled.div `
display: flex;
align-items: center;
`;
const Price= styled.span `
font-weight: bold;
font-size: 50px;
@media only screen and (max-width: 480px) {
 font-size: 30px;
}

`;
const Type= styled.button `
padding: 10px;
margin: 10px  0;
border: 1.5px solid crimson;
color: crimson;
background-color: white;
border-radius: 15px;
@media only screen and (max-width: 480px) {
 display: none;
}
`;

const List= styled.ul `
list-style: none;
`;
const ListItem= styled.li `
margin: 30px 0;
@media only screen and (max-width: 480px) {
 margin: 10px;
 font-size: 12px;
}

`;
const Button= styled.button `
border: none;
font-weight: bold;
background-color: crimson;
color: white;
font-size: 16px;
padding: 15px;
border-radius: 15px;
cursor: pointer;
@media only screen and (max-width: 480px) {
font-size: 12px;
padding: 5px;
}
`;




const PriceCard = ({price,type}) => {
  return (
    <Conatiner>
        <PriceContainer>
            $ <Price> {price} </Price>
        </PriceContainer>
            <Type> {type} </Type>
            <List>
                <ListItem>
                   10 Modern and creative Templates
                </ListItem>
                <ListItem>
                   Templates On Demand
                </ListItem>
                <ListItem>
                   1 Support Developer
                </ListItem>
            </List>
            <Button> Purchase Now </Button>
    </Conatiner>


  )
}

export default PriceCard