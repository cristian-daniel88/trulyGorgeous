import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import { FaArrowsAltH } from "react-icons/fa";

export const SliderContainerA = styled.li`
width: 90%;
background-color: #f0f4f8;
margin: auto;
border: solid 1px #e8d8d8;
border-radius:10px ;
list-style:none ;
`



export const SliderContainerPhotoMain = styled(ScrollContainer)`
height: auto;
padding: 5px;
width:700px ;
margin: auto;
display:flex ;
@media screen and (max-width: 1263px) {
   
   width: 400px;
  
   
  }

`


export const PhotoMain = styled.img`

margin-top:1%;
border: solid 1px #e8d8d8;
border-radius: 10px;
background-color: white;
width: 300px;
height: 350px;
margin-right:10px ;
margin-right: 20px;
cursor: pointer;


  &:hover {
    filter: contrast(100%);
    transform: scale(1.04);
    
  }




`
export const Scrollsito = styled.div`

position: relative;


`
export const ScrollsitoArrow = styled.div`
height: 20px;
background-color:gray;
width: calc(900px*2);
position:absolute ;
bottom:0 ;
border-radius:10px ;
display: flex;
align-items:center ;
justify-content:end;
margin-left:1px ;
opacity:0.7 ;
z-index: 4;
`

export const ScrollsitoPoin =styled.div`
width: calc(50px);
height: 15px;
background:white ;
margin-right: calc(190px*6);
border:solid 1px black ;
border-radius:10px ;
cursor: pointer;
display:flex ;
justify-content:center ;
align-items:center ;

@media screen and (max-width: 1263px) {
   
   
   margin-right: calc(1500px);
  
   
  }





`

export const Flecha = styled(FaArrowsAltH)`
font-size:1em ;
color: #6d8e88 ;
`


// april 16 1pm