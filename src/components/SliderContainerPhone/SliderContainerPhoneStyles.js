import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

export const PhoneCard = styled.div`
display:block ;

`

export const PhoneCardTitleContainer = styled.div`

height:auto ;
width: 95%;
margin-bottom: 10px ;
background-color:white;
margin: auto;
border-left:solid 1px #e8d8d8; 
border-right:solid 1px #e8d8d8;
text-align : center;
font-family: 'Cormorant Garamond', serif;
font-weight: 500;
color: #494261b5;

padding:5% ;


`

export const ImagenContainerDesigner = styled.div`
padding: 10px;
width:95% ;
height:500px ;

background-color: white;
margin:auto ;
display:flex ;
justify-content:center ;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-top: solid 1px #e8d8d8;
border-left:solid 1px #e8d8d8; 
border-right:solid 1px #e8d8d8;

@media screen and (max-width: 821px) and (min-width: 819px) {
height: 1500px;
}

@media screen and (max-width: 769px) and (min-width: 767px) {
height: 1500px;
}

`

export const ImgDesignerModel = styled.div`


background-image: ${({img}) => `url(${img})`};
background-size: cover;
background-repeat:no-repeat ;
background-position:center ;
width: 90%;
height:100%;
border: solid 1px #e8d8d8;
border-radius:10px ;


`

export const ButtonsContainer = styled.div`
width: 95%;
height: 55px;
background-color:white ;
margin:auto ;
margin-bottom:40px ;

border-left:solid 1px #e8d8d8; 
border-right:solid 1px #e8d8d8;
border-bottom: solid 1px #e8d8d8;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;

display:flex;
justify-content:space-around ;
align-items:center ;
`

export const ButtonsIconsContainer = styled.div`
border-radius: 50%;
width:45px ;
height:45px ;
display: flex;
justify-content:center ;
align-items:center ;
background-color: #f0f4f8;
border:solid 1px #e8d8d8 ;
cursor: pointer;

&:active {
    opacity: .5;
}
`

export const ButtonsArrowIconL = styled(AiFillCaretLeft)`
font-size: 2em;
margin-right:5px ;

`

export const ButtonsArrowIconR = styled(AiFillCaretRight)`
font-size:2em ;
margin-left:5px ;

`