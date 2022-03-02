import styled from "styled-components";

export const DesignersContainer = styled.section`
width: 100%;
height: auto;
background-color: #f0f4f8;
padding-top: 10px;




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

export const ProductContainer = styled.div`
width: 95%;
height: auto;
display: flex;
margin: auto;
margin-bottom: 20px;
background-color: white;
border: solid 1px #e8d8d8;
border-radius: 10px;

padding-left : 20px;
display: flex;
align-items: center;
`

export const MainPhotoContainer = styled.div`

width: 30%;
height: 660px; 

background-image: ${({img})=> `url(${img})`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: solid 1px #e8d8d8;

border-radius: 10px;


`

export const GridPhotoContainer = styled.div`

width: 60%;
height: 700px;
//border: solid 1px black;


`