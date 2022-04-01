import React from "react";
import { useDispatch } from "react-redux";
import { weddingDresses } from "../../database/weddingDresses";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

import {
  DesignersContainer,
  NameDesigner,
  ProductContainerPhone,

} from "../Designers/DesignersStyles";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";
import { Cart, CartGrid } from "./WeddingDressesStyles";



function Romantic() {

  const dispatch = useDispatch()

 

  const click = (value, booleano) => {
  
    dispatch(clickPopUpPhoto(value, booleano))
  }


  return (
    <DesignersContainer>
      <NameDesigner>Romantic</NameDesigner>

        <CartGrid>
          { weddingDresses[1].models.map((v, i) => (

            <Cart img={v.imgs} key={i} onClick={()=> click(v.imgs[0], true)}>
              
            </Cart>
          ))}
       
        </CartGrid>

        
    
          
        {
       weddingDresses[1].models.map((v, i) => (
          
          
            <>
            <ProductContainerPhone key={i} style={{'marginBottom':'50px'}}>
     
              
              <>
               <SliderContainerPhone a={v} />
              </>
         
            </ProductContainerPhone>
            </>
          

       ))

     }
          

     
     
    </DesignersContainer>
  );
}

export default Romantic;
