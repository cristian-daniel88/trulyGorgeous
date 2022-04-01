import React, { useState } from "react";

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

function PalomaBlanca() {
  const ronaldModelsObject = designers[4].models;
  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  

  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [third, setthird] = useState(0);
  const [fourth, setfourth] = useState(0);
  const [fift, setfift] = useState(0);

  const changePhoto0 = () => {
    if(first == 0) {
      setfirst(1)
    }  
    
    if(first == 1) {
      setfirst(0)
    }  

    return
  }

  const changePhoto1 = () => {
    
    if(second == 0) {
      setsecond(1)
    }  
    
    if(second == 1) {
      setsecond(0)
    }  

    return
  }

  const changePhoto2 = () => {
    if(third == 0) {
      setthird(1)
    }  
    
    if(third == 1) {
      setthird(0)
    }  

    return
  }

  const changePhoto3 = () => {
    if(fourth == 0) {
      setfourth(1)
    }  
    
    if(fourth == 1) {
      setfourth(0)
    }  

    return
  }

  const changePhoto4 = () => {
    if(fift == 0) {
      setfift(1)
    }  
    
    if(fift == 1) {
      setfift(0)
    }  

    return
  }

  return (
    <DesignersContainer>

      <OurCreationsContainer>
        {/* 0 */}
      <NameDesigner style={{ marginTop: "30px" }}>Paloma Blanca</NameDesigner>
        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[0].imgs[first]}
              onMouseEnter={() => setfirst(1)}
              onMouseLeave={() => setfirst(0)}
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

        {/* 1 */}

        <NameDesigner style={{'marginBottom':'20px'}}>Paloma Blanca</NameDesigner>

        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[1].imgs[second]}
              onMouseEnter={() => setsecond(1)}
              onMouseLeave={() => setsecond(0)}
              style={{ width: "350px" }}
              onClick={changePhoto1}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[1].imgs.map((j, p) => (
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

        {/* 2 */}

        <NameDesigner>Paloma Blanca</NameDesigner>

        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[2].imgs[third]}
              onMouseEnter={() => setthird(1)}
              onMouseLeave={() => setthird(0)}
              style={{ width: "350px" }}
              onClick={changePhoto2}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[2].imgs.map((j, p) => (
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

        {/* 3 */}

        <NameDesigner>Paloma Blanca</NameDesigner>

        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[3].imgs[fourth]}
              onMouseEnter={() => setfourth(1)}
              onMouseLeave={() => setfourth(0)}
              style={{ width: "450px" }}
              onClick={changePhoto3}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[3].imgs.map((j, p) => (
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

        {/* 4 */}

        <NameDesigner>Paloma Blanca</NameDesigner>

        <OurCreationsBox palomaSize='true'>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[4].imgs[fift]}
              onMouseEnter={() => setfift(1)}
              onMouseLeave={() => setfift(0)}
              style={{ width: "450px" }}
              onClick={changePhoto4}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[4].imgs.map((j, p) => (
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

export default PalomaBlanca;
