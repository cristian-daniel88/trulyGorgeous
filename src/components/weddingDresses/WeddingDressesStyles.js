import styled from "styled-components";


export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
 
  margin-left: 10px;
  padding:0 10% ;

  @media screen and (max-width: 700px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 865px) {
   display: none;
}
`;

export const Cart = styled.div`
  height: 500px;
  padding: 10px;
  color: #000;
  border-radius: 7px;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 2px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-image:${({img}) =>  `url(${img})`} ;
  background-position:center ;

  background-size:cover ;
  margin-top:20px ;
  margin-bottom:20px ;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 140%;
    
  }
`;
