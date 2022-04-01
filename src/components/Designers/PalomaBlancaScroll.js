import React, { useEffect, useState } from "react";

import { designers } from "../../database/designers";

import { DesignersContainer, NameDesigner } from "./DesignersStyles";

import {
  OurCreationsContainer,
  OurCreationsBox,
  OurCreationsBox1,
  OurCreationsBox2,
  OurCreationsBox4,
  OurCreationsBox3,
  DescriptionOurCreations,
  CartGridOurCreations,
  CartOurCreations,
} from "../Alterations/OurCreationsStyles";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

function PalomaBlancaScroll() {
  const ronaldModelsObject = designers[4].models;
  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  

  const [first, setfirst] = useState(0);

  const changePhoto0 = () => {
    if(first == 0) {
      setfirst(1)
    }  
    
    if(first == 1) {
      setfirst(0)
    }  

    return
  }


  async function scrollDown () {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    

    if (scrollTop + clientHeight >= scrollHeight - 3) {
      
      setfirst(first + 1)

      
    
      
        

   
      
    };


    console.log(first);
    return
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollDown)
    return () => {
      window.removeEventListener('scroll', scrollDown);
    }
  }, [scrollDown]);

 

  return (
    <DesignersContainer>

      <OurCreationsContainer>
        {/* 0 */}


      <NameDesigner style={{ marginTop: "30px" }}>Paloma Blanca</NameDesigner>
        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[0].imgs[first]}
            
              style={{ width: "450px" }}

              onClick={changePhoto0}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[0].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>
        </OurCreationsBox>




      </OurCreationsContainer>
    </DesignersContainer>
  );
}

export default PalomaBlancaScroll;
