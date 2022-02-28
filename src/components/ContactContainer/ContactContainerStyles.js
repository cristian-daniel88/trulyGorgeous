import styled from "styled-components";

export const ContainerContact = styled.section`
width: 100%;
height: auto;
background-color: #f0f4f8;
padding: 2% 10%;

`

export const ContainerBoxesContact = styled.div`
width: 100%;
height: auto;
//border: solid 1px black;
display: flex;
flex-wrap: wrap;

`

export const ContactBoxes1 = styled.div`
width: 45%;
height: auto;
//border: solid 1px green;
min-width: 300px;


@media screen and (max-width: 865px) {
   width: 100%;
  
   
  }
`

export const ContactDetails = styled.div`
width: 100%;
height: auto;
//background-color: green;
padding: 10px;
`


export const ContactDetailsContainer = styled.div`
width: 100%;
border-radius: 10px;
height: auto;
border: solid 1px #e8d8d8;
background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;

padding: 1px;
`
export const PhoneContainer = styled.div`
width: 50%;
height: auto;
//background-color: blue;
min-width: 200px;
@import url('https://fonts.googleapis.com/css2?family=Alef&family=PT+Sans&family=Raleway:ital@1&display=swap');
font-family: 'Alef', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'PT Sans', sans-serif;
font-size: 13px;
color: #747474;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;

@media screen and (max-width: 1200px) {
    width: 100%;
  }
`
export const AdressContainer = styled.div`
width: 50%;
height: auto;
//background-color: black;
min-width: 200px;
padding-top: 5px;
padding-bottom: 10px;
padding-right: 2px;
padding-left: 5px;
@import url('https://fonts.googleapis.com/css2?family=Alef&family=PT+Sans&family=Raleway:ital@1&display=swap');
font-family: 'Alef', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'PT Sans', sans-serif;
font-size: 13px;
color: #747474;

@media screen and (max-width: 1200px) {
    width: 100%;
  }

`

export const BoldContact = styled.strong`
user-select: text;


`
export const PContact = styled.p`
font-size: 14px;
user-select: text;

`


export const ContactForm = styled.div`
width: 100%;
height: auto;
//background-color: blue;
padding: 10px;

`

export const Form = styled.form`
width: 100%;
border-radius: 10px;
height: auto;
border: solid 1px #e8d8d8;
background-color: white;
display: flex;
flex-direction: column;
padding: 20px;


`

export const Label = styled.label`
display: block;
@import url('https://fonts.googleapis.com/css2?family=Alef&family=PT+Sans&family=Raleway:ital@1&display=swap');
font-family: 'Raleway', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Alef', sans-serif;
color: #747474;
margin-left: 4%;


`

export const Input = styled.input`
width: 90%;
margin-bottom: 10px;
outline: none;
height: 30px;
border-radius: 10px;
border: none;
background-color: #f0f4f8;
padding: 5px;
//color: #747474;
margin-left: 4%;
margin-bottom: 15px;
margin-top: 8px;

&:focus {
    box-shadow: 2px 6px 13px -4px rgba(0,0,0,0.54);
}

&::placeholder {
    color:#b3bfca;
}




`

export const TextArea = styled.textarea`
width: 90%;
height: 200px;
resize: none;
width: 90%;
outline: none;

border-radius: 10px;
border: none;
background-color: #f0f4f8;
padding: 10px;
margin-left: 4%;


&::placeholder {
    color:#b3bfca;
}

&:focus {
    box-shadow: 2px 6px 13px -4px rgba(0,0,0,0.54);
}


`

export const Send = styled.button`
height: 40px;
border: none;
border-radius: 10px;
width: 20%;
margin: auto;
margin-top: 20px;
@import url('https://fonts.googleapis.com/css2?family=Alef&family=PT+Sans&family=Raleway:ital@1&display=swap');
font-family: 'Raleway', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Alef', sans-serif;
color: #747474;
font-weight: 800;
background: transparent;
background-color: #bde9dc;
cursor: pointer;
letter-spacing: 2px;

&:active {
    opacity: 0.5;
}

`














//  Box 2

export const ContactBoxes2 = styled.div`
width: 55%;
height: 500px;

display: flex;
justify-content: center;


@media screen and (max-width: 865px) {
   width: 100%;
  
   
  }



`

export const IframeBoxContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
//background-color: white;
align-items: center;
padding-bottom: 10px;
`

export const IframeBox = styled.iframe`
border: none;
height: 400px;
width: 90%;
margin-top: 0px;


`


export const Aside = styled.div`
width: 100%;
border-bottom: solid 1px black;
padding-bottom: 10px;

`