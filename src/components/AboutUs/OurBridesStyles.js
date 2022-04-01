import styled from "styled-components";

export const CardBridesContainer = styled.div`
width:90% ;
height:350px ;
//background-color:white ;
margin:auto ;
margin-bottom:30px ;
border-bottom: solid 1px #e8d8d8;
//border-radius:10px ;
display: flex;
justify-content:center ;
align-items:center ;

@media screen and (max-width: 865px) {
    display: none;
  }
`

export const CardBride = styled.div`
width:30% ;

height:90% ;
border: solid 1px #e8d8d8;
border-radius:50px ;
background-image:${({img})=> `url(${img})`} ;
background-size:cover;

background-repeat:no-repeat ;
background-position:center ;
cursor: pointer;
`

export const TestimonialsImg = styled.img`
height:auto ;
width:95% ;
rotate: 90%;
margin-bottom: 20px;

@media screen and (max-width: 865px) {
    display:${({testimonials}) => testimonials && 'none'} ;
  
   
  }

`