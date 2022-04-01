import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";



export const PopUpPhotoOurCreations = styled.div`
height: auto;
width: 100%;
background-color: rgba(0, 0, 0,.8);
position: fixed;
z-index: 494;

display: ${({toggle}) => toggle == 'true' ? 'flex' : 'none'};

justify-content:center;
padding:2%  0;
padding-bottom:50vh ;


`

export const MarcoPhotoOurCreations = styled.div`
width: 440px;

display:flex ;
justify-content:center ;
position:relative ;
border-radius:10px ;
background-color:black ;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
padding: 30px;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646949721/ourCreations/6/bridal-creations-34_hwed35.jpg' && "45px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646949722/ourCreations/8/bride-creations-38_mdfcdp.jpg' && "60px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646949713/ourCreations/24/bridal-creations-93_rxwhhi.jpg' && "40px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646949720/ourCreations/33/wedding-bridal-creations-29_arqfg8.jpg' && "70px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646949720/ourCreations/5/bridal-creations-25_ryz6fs.jpg' && "65px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646862871/designers/palomaBlanca/4894/4894f-2_xrxccu.jpg' && "65px"} ;
padding:${({resizePadding}) => resizePadding == 'https://res.cloudinary.com/truly-gorgeous/image/upload/v1646862883/designers/palomaBlanca/4984/4984f_en0cvk.jpg' && "65px"} ;





@media screen and (max-width: 865px) {
  
  min-width:200px ;
  margin-top:60px ;
  max-width:400px ;
  padding:5px ;
  
  
  
  
}



`


export const PhotoPopUpOurCreations = styled.img`
width:100% ;
border:solid 1px white ;








@media screen and (max-width: 865px) {
  width: 100%;
  
   
   
  }

`

export const CloseContainerOurCreations = styled.div`
width: 30px;
height: 30px;
border-radius: 50% ;
background-color: white;
position: absolute;
right:2% ;
top:2% ;
cursor: pointer;
border:solid 1px beige;
display: flex;
justify-content:center ;
align-items:center ;

@media screen and (max-width: 865px) {

}
`

export const CloseIconOurCreations = styled(FaRegTimesCircle)`
font-size:2em ;
`

 

