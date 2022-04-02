import styled from "styled-components";

export const DesignersContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #f0f4f8;
  padding-top: 10px;


  
`;

export const NameDesigner = styled.h3`
  text-align: center;
  font-size: 2em;
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap");
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  color: black;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* font-family: "Carattere", cursive;
  font-family: "Cormorant Garamond", serif;
  font-family: "Fredoka", sans-serif; */
  margin-top: 20px;
  margin-bottom: 10px;

  font-family: "FuturaStd", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  color: #a59797;
  font-size: 120%;

  margin-top: ${({alterationsMargin}) => alterationsMargin && '0px'} ;
  color: ${({alterationsMargin}) => alterationsMargin && '#d5d9df'} ; 
  background-color: ${({alterationsMargin}) => alterationsMargin && 'white'} ; 
  height:${({alterationsMargin}) => alterationsMargin && '80px'} ;
  display:${({alterationsMargin}) => alterationsMargin && 'flex'} ;
  justify-content:${({alterationsMargin}) => alterationsMargin && 'center'} ;
  align-items:${({alterationsMargin}) => alterationsMargin && 'center'} ;



  @media screen and (max-width: 865px) {
    margin-top: 20px;
    font-size: 1.5em;
    margin-top: ${({alterationsMargin}) => alterationsMargin && '0px'} ;
  }
`;

export const NameDesignerSub = styled.h3`
  text-align: center;
  font-size: 2em;
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap");
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  color: black;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* font-family: "Carattere", cursive;
  font-family: "Cormorant Garamond", serif;
  font-family: "Fredoka", sans-serif; */
  margin-top: 20px;
  margin-bottom: 10px;

  font-family: "FuturaStd", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  color: #a59797;
  font-size: 120%;

  @media screen and (max-width: 865px) {
    display:none ;

  
  }




  @media screen and (max-width: 865px) {
    margin-top: 20px;
    font-size: 1.5em;
  }
`;





export const BrandDesigner = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  height: ${({ h }) => `${h}`};
  width: ${({ w }) => `${w}`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;

  @media screen and (max-width: 865px) {
    width: 70%;
  }
`;

export const ProductContainer = styled.div`
  width: 95%;
  height: auto;
  margin: auto;
  //margin-bottom: 20px;
  background-color: white;
  border: solid 1px #e8d8d8;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1% 0;

  @media screen and (max-width: 865px) {
    display: none;
  }
`;

export const ProductContainerPhone = styled.div`
  width: 100%;
  height: auto;

  //background-color:beige ;
  margin: auto;
  border-bottom: solid 1px white;

  display: none;

  @media screen and (max-width: 865px) {
    display: block;
  }
`;

export const MainPhotoContainer = styled.img`
  width: 25%;
  height: 500px;
  background-color: #f0f4f8;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: solid 1px #e8d8d8;

  border-radius: 10px;
`;

export const GridPhotoContainer = styled.div`
  width: 65%;
  height: 500px;
  //border: solid 1px black;
`;

export const ModelNameTitle = styled.h4`
  margin-top: 5%;
  margin-bottom: 4%;
  font-size: 18px;
  margin-left: 5%;

  font-family: "Cormorant Garamond", serif;
  color: #494261b5;
`;

// Designers Main

export const DesignersMainContainer = styled.div`
  width: 60%;
  height: auto;
  margin: auto;
  margin-top: ${({alterationsMargin}) => alterationsMargin && '200px'};
  margin-top: ${({designer}) => designer && '50px'};


  @media screen and (max-width: 865px) {
    margin-top: ${({alterationsMargin}) => alterationsMargin && '150px'} ;
    margin:auto ;
    display: ${({designer}) => designer && 'none'};
   
 
  }


`;
export const DesignersCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;


  @media screen and (min-width: 1016px) {
  }
`;

export const DesignersMainCard = styled.div`
  min-width: 200px;
  width: 300px;
  width:250px ;
  display: flex;
  justify-content: center;

  background-color: white;
  border: solid 1px #e8d8d8;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 50px;
  padding: 10px;
  margin: ${({alterations})=> alterations && '50px'};
  &:hover {
    box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.54);
    transform: scale(1.2);
  }

  @media screen and (min-width: 1016px) {
    justify-content: ${({ bottom }) => bottom == "true" && "center"};
  }

  
  @media screen and (max-width: 405px) {
    margin: ${({alterations})=> alterations && '0'};
    width: ${({alterations})=> alterations && '250px'};
   
  
  
   
  }
`;

export const TitleBrand = styled.div`
  font-family: "Acme", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Acme&family=Carattere&family=Cormorant+Garamond&family=Fredoka&display=swap");
  font-size: 1em;
  text-transform: uppercase;
  color: #62647a;

  font-family: "FuturaStd", sans-serif;
  border-radius: 3px;
  background-color:rgba(255,255,255,.9);
  font-weight: 300;
  //letter-spacing: 5px;
  color:#494261b5;
  //color: #a59797;
`;


export const DesignersPhoneDiv = styled.div`
display:none ;


@media screen and (max-width: 865px) {
  
    display: ${({designer}) => designer && 'flex'};
    width:100% ;
   // background-color:green ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
   
 
  }


`
