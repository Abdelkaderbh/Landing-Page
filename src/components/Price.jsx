import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard';





const Conatiner = styled.div `
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 480px) {
  flex-direction: column;
}

`;

function Price() {
  return (
    <Conatiner>
        <PriceCard  price="20" type="Basic" />
        <PriceCard price="30" type ="Premium" />
        <PriceCard price="50" type ="Jumbo" />
    </Conatiner>
  )
}

export default Price