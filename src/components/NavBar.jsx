import React from 'react'
import styled from 'styled-components'



const Conatiner = styled.div`
height: 50px;
` ;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
` ;

const Left = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
` ;

const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;

` ;

const Menu = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width:480px) {
  display: none;
}

`;
const MenuItem = styled.li `
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
cursor: pointer;
`;


const Button = styled.button `
border: 2px solid white;
cursor: pointer;
padding: 10px 15px;
background-color: lightskyblue;
color: white;
font-weight: bold;
border-radius: 10px;

`

const NavBar = () => {
  return (
    <Conatiner>
        <Wrapper>
        <Left> 
            <Logo> Logo </Logo>
            <Menu>
                <MenuItem> Home </MenuItem>
                <MenuItem>  Features </MenuItem>
                <MenuItem> Services </MenuItem>
                <MenuItem> Pricing </MenuItem>
                <MenuItem> Contact </MenuItem>
            </Menu>
        </Left>
        <Button>JOIN US !</Button>
       
        </Wrapper>
        </Conatiner>
  )
}

export default NavBar