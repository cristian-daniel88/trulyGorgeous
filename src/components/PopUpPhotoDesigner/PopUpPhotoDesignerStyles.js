import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";



export const PopUpPhoto = styled.div`
height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0,.8);
position: fixed;
z-index: 494;

display: ${({toggle}) => toggle == 'true' ? 'flex' : 'none'};

justify-content:center;
padding:2%  0;


`

export const MarcoPhoto = styled.div`
width: 660px;
height:550px ;
border:solid 1px white ;
display:flex ;
justify-content:center ;
position:relative ;
border-radius:10px ;
background-color:black ;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


width:${({w})=> w == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646251799/designers/ronaldJoyce/69555/69555_5121_etob8z.jpg' && '1200px'} ;

  


@media screen and (max-width: 865px) {

  min-width:200px ;
  margin-top:30px ;
  max-width:350px ;

  /* min-width:${({anchoOurBrides}) => anchoOurBrides == 'true' && '300px'};

  max-width:${({anchoOurBrides}) => anchoOurBrides == 'true' && '550px'}; */

   
  }



`


export const PhotoPopUp = styled.img`
background-image: ${({img}) => `url(${img})`} ;
background-position:center ;
background-size:contain ;
border-radius:10px ;
background-repeat:no-repeat ;
border: solid 1px black;





@media screen and (max-width: 865px) {
  width: 100%;
  
   
   
  }

`

export const CloseContainer = styled.div`
width: 30px;
height: 30px;
border-radius: 50% ;
background-color: white;
position: absolute;
right:0.5% ;
top:.5% ;
cursor: pointer;
border:solid 1px beige;
display: flex;
justify-content:center ;
align-items:center ;

@media screen and (max-width: 865px) {

}
`

export const CloseIcon = styled(FaRegTimesCircle)`
font-size:2em ;
`

 

