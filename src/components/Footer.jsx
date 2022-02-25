import React from 'react'
import styled from 'styled-components'


const Conatiner = styled.div `
height: 10%;
background-color: lightskyblue;
color: white;

` ;

const Wrapper = styled.div `
padding: 20px;
display: flex;
justify-content: space-between;

` ;

const List = styled.ul `
padding: 0;
margin: 0;
list-style: none;
display: flex;
` ;

const ListItem = styled.li `
margin-right: 20px;
@media only screen and (max-width: 480px) {
 padding: 5px;
 margin-right: 10px;
 font-size: 14px;
}

` ;



const Copyright = styled.span `
@media only screen and (max-width: 480px) {
 padding: 5px;
 margin-right: 10px;
 font-size: 14px;
}` ;






const Footer = () => {
  return (
    <Conatiner>
        <Wrapper>
            <List>
                    <ListItem> Guide </ListItem>
                    <ListItem> Support </ListItem>
                    <ListItem> Community </ListItem>
                    <ListItem> Donate </ListItem>
            </List>
            <Copyright> Abdelkader Bh © </Copyright>
        </Wrapper>  
        
    </Conatiner>
  )
}

export default Footer