import styled from "styled-components";

export const DesignersContainer = styled.section`
width: 100%;
height: 100vh;
//background-color: aqua;
padding: 0 10%;
padding-top: 40px;


`

export const NameDesigner = styled.h3`
text-align: center;
font-size: 2em;
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-weight: 500;
color: #332f40b5;
letter-spacing: 2px;
text-transform: uppercase;

`

export const BrandDesigner = styled.div`
background-image: ${({img})=> `url(${img})`};
height: ${({h})=> `${h}`};
width: ${({w})=> `${w}`};
background-position: center;
background-size: contain;
background-repeat: no-repeat;
margin: auto;

@media screen and (max-width: 865px) {
  
  width: 70%;
   
  }
`