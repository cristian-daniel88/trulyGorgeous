import styled from "styled-components";

export const TestimonialsContainer = styled.section`
width:100%;
height:auto;
padding: 0 10%;


@media screen and (max-width: 865px) {
   display: flex;
   justify-content: center;
   
  
   
  }



`;

export const CardGridTestimonials = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
 
  
  padding:0 3% ;
  margin-bottom:50px ;
  
  
  `;

export const CartTestimonials = styled.div`
  width:330px ;
  height:200px ;

  
 
 
  //box-shadow: 0px 0px 2px 0px grey;
  

  background-image:${({img}) =>  `url(${img})`} ;
  background-position:center ;
  background-size:cover ;
  margin-top:20px ;

  @media screen and (max-width: 400px) {
   width: 300px;
   
  }
 
    

  
  

 

`;

export const TestimonalsCartsDetails= styled.blockquote`
background-color:#f6f6f6 ;
width:330px ;
margin:0 ;
color: #3a540a;
font-family: 'PT Sans';
    font-weight: 400;
border-left:solid 1px #e8d8d8;
border-bottom: solid 1px #e8d8d8;
border-right:solid 1px #e8d8d8;
padding:5px ;

@media screen and (max-width: 400px) {
   width: 300px;
   
  }
 

`





