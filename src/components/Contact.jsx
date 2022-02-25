import React from 'react'
import styled from 'styled-components'
import Map from '../assets/map.png'
import Phone from '../assets/phone.png'
import Send from '../assets/send.png'



const Container = styled.div `
height: 90%;
` ;
const Wrapper = styled.div `
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
 flex-direction: column;
 padding: 10px;
}
` ;
const FormContainer = styled.div `
width: 50%;
@media only screen and (max-width: 480px) {
 width: 100%;
}
` ;

const Title = styled.h1 `
margin: 50px;
margin-top: 0;
@media only screen and (max-width: 480px) {
 margin: 20px;
}
` ;



const Form = styled.form `
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
 flex-direction: column;
}

` ;

const LeftForm = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
@media only screen and (max-width: 480px) {
 height: 50%;
 margin-right: 0;
}
` ;

const RightForm = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width: 480px) {
 height: 50%;
}

` ;

const Input = styled.input `
width: 200px;
padding: 20px;
@media only screen and (max-width: 480px) {
 padding: 5px;
}

` ;

const TextArea = styled.input `
width: 200px;
height: 130px;
padding: 20px;
@media only screen and (max-width: 480px) {
 padding: 5px;
 margin-top: 20px;
}
` ;

const Button = styled.button `
border: none;
font-weight: bold;
background-color: crimson;
color: white;
font-size: 16px;
padding: 15px;
border-radius: 15px;
cursor: pointer;
@media only screen and (max-width: 480px) {
 padding: 5px;
 font-size: 14px;
 margin-top: 20px;
}
` ;


const AdresseContainer = styled.div `
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
 width:100%;
 margin-top: 20px;
}
` ;


const AdresseItem= styled.div `
display: flex;
align-items: center;
margin-bottom: 50px;
@media only screen and (max-width: 480px) {
 margin-bottom: 20px;

}


`;

const Icon = styled.img `
width: 20px;
margin-right: 20px;
@media only screen and (max-width: 480px) {
 width: 15px;
}
` ;

const Text = styled.span `
font-size: 20px;
margin-right: 15px;
@media only screen and (max-width: 480px) {
 font-size: 12px;
}
` ;



const Contact = () => {
  return (
    <Container>
        <Wrapper>
                <FormContainer>
                    <Title> Questions ? <br /> Contact Me Now  </Title> 
                <Form>
                    <LeftForm>
                        <Input placeholder='Your Name here'></Input>
                        <Input placeholder='Your Email here'></Input>
                        <Input placeholder='Your Subject'></Input>   
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'></TextArea>
                        <Button > Send </Button>
                    </RightForm>
                        </Form>
                </FormContainer>
                <AdresseContainer> 
                        <AdresseItem>
                            <Icon src={Map} /> <Text> 900 Mansell Rd, Roswell, 	Georgia </Text>
                        </AdresseItem>
                        <AdresseItem> <Icon src={Phone} /> <Text> +1 123 4567 8910 </Text> 
                        </AdresseItem>
                        <AdresseItem>  <Icon src={Send} /> <Text> email@domain.com </Text>
                        </AdresseItem>
                </AdresseContainer>
        </Wrapper>
        </Container>
  )
}

export default Contact