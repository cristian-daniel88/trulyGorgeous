import { S } from "caniuse-lite/data/agents";
import styled from "styled-components";

export const PriceListContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 0 10%;
  user-select: text;
  @media screen and (max-width: 865px) {
    padding:0 3% ;
    
  }
`;

export const PriceListBox = styled.div`
  width: 60%;
  
  background: white;
  margin: auto;
  border-radius: 10px;
  border: double 15px rgba(0,0,0,0.2);
  padding: 20px;
  padding-top: 25px;
  margin-bottom: 50px;
 
  @media screen and (max-width: 865px) {
   width: 100%;
   padding: 2px;
   padding-top: 5%;
   padding-left:2% ;
   padding-right:2% ;
  }
`;

export const PriceListBoxTitle = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Cormorant Garamond", serif !important;
  letter-spacing: 1px;
  font-size: 20px;
  //color: #494261b5;
  //text-transform:uppercase;
  font-family: "Carattere", cursive !important;
  user-select: text;

  @media screen and (max-width: 865px) {
   font-size: 15px;
  }
 
`;

export const PriceListBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PriceListBoxSubTitle = styled.p`
  display: block;
  
  font-family: "PT Sans", sans-serif;
  font-size: 15px;
  color: #747474;
  text-align: left;
  width: 20%;
  text-decoration:underline ;
  user-select: text;
  @media screen and (max-width: 865px) {
   font-size: 10px;
  }
  
`;

export const PriceDetails = styled.p`
  display: block;
  
  font-family: "PT Sans", sans-serif;
  font-size: 15px;
  color: #747474;
  text-align: left;
  width:80% ;
  margin-bottom:10px ;
  user-select: text;

  @media screen and (max-width: 865px) {
   font-size: 10px;
   width:50% ;
   margin-bottom:15px ;
  }
  
`;



export const Price = styled.p`
  display: block;
  
  font-family: "PT Sans", sans-serif;
  font-size: 15px;
  color: #747474;
  text-align: left;
  //background-color:black ;
  width: 20%;
  user-select: text;
  @media screen and (max-width: 865px) {
   font-size: 10px;
   width: 20%;
  }
`;


export const PriceLetter = styled.div`
width:100% ;

border: solid 1px #e8d8d8;
border-radius: 10px;
margin-top:40px;  
padding:10px ;
text-align:center ;
background-color: #f0f4f8;
color: #747474;
margin-bottom:20px ;
user-select: text;

@media screen and (max-width: 865px) {
    font-size:13px ;
    
  }

`

export const PriceP = styled.p`
 user-select: text;

`
