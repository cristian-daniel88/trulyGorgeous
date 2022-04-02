import React from "react";

import { designers } from "../../database/designers";

import SliderContainer from "../SliderContainer/SliderContainer";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";

import {
  DesignersContainer,
  GridPhotoContainer,
  ModelNameTitle,
  NameDesigner,
  NameDesignerSub,
  ProductContainer,
  ProductContainerPhone,
} from "./DesignersStyles";

import MainPhoto from "./MainPhoto";

function RonaldJoyce() {
  const ronaldModelsObject = designers[0].models;

  return (
    <DesignersContainer>
      <NameDesigner style={{'margin':'30px'}}>Ronald Joyce</NameDesigner>

      {ronaldModelsObject.map((value, index) => (
        <>
          <ProductContainer key={index}>
            <MainPhoto
              front={value.imgs[0]}
              back={value.imgs[1]}
              key={index}
              src={value.imgs[0]}
            ></MainPhoto>
            <GridPhotoContainer>
              <ModelNameTitle></ModelNameTitle>

              <SliderContainer photoMain={value.imgs} i={index} by={0} s />
            </GridPhotoContainer>
          </ProductContainer>

          {value.uid == "69652" ? (
            ""
          ) : (
            <NameDesignerSub style={{ margin: "30px" }}>
              Ronald Joyce
            </NameDesignerSub>
          )}
        </>
      ))}

      {ronaldModelsObject.map((v, i) => (
        <>
          <ProductContainerPhone>
            <>
              <SliderContainerPhone a={v} />
            </>
              
            {v.uid == "69652" ? (
            ""
          ) : (
            <NameDesigner style={{ margin: "30px" }}>
              Ronald Joyce
            </NameDesigner>
          )}
         
          </ProductContainerPhone>
        </>
      ))}
    </DesignersContainer>
  );
}

export default RonaldJoyce;
