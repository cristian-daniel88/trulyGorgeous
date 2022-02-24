import styled from "styled-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";


export const ContactContainer =styled.div`
width: 25%;
height: 8%;
//background-color: green;
position: absolute;
top: 70%;
right: 5%;
display: none;
@media screen and (max-width: 865px) {
    display: flex;
   
    justify-content: end;
    align-items: center;

  
  }


`

export const ContactContainer2 = styled.a`
width: 3em;
height: 3em;
background-color: rgba(242, 241, 239, .7);
background-color: #d2e4c8, .5;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
border: solid 3px white;
`

export const ContactContainer3 = styled.div`
width: 2.5em;
height: 2.5em;

display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
margin-left: 20px;

background: rgba(242, 241, 239, .7);
`

export const PhoneMovil = styled(FaPhone)`
font-size: 2em;
color: #456cdc;

`

export const EmailMovil = styled(FaEnvelope)`
font-size: 2.5em;
`