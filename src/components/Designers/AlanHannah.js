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

function AlanHannah() {
  const ronaldModelsObject = designers[2].models;

  return (
    <DesignersContainer>
      <NameDesigner style={{ margin: "30px" }}>Alan Hannah</NameDesigner>

      {ronaldModelsObject.map((value, index) => (
        <>
          <ProductContainer key={index}>
            <MainPhoto
              front={value.imgs[0]}
              back={value.imgs[1] ? value.imgs[1] : value.imgs[0]}
              key={index}
              src={value.imgs[0]}
            ></MainPhoto>
            <GridPhotoContainer>
              <ModelNameTitle></ModelNameTitle>

              <SliderContainer photoMain={value.imgs} i={index} by={0} s />
            </GridPhotoContainer>
          </ProductContainer>
          {value.uid == "5" ? (
            ""
          ) : (
            <NameDesignerSub style={{ margin: "30px" }}>
              Alan Hannah
            </NameDesignerSub>
          )}
        </>
      ))}

      {ronaldModelsObject.map((v, i) => (
        <>
          <ProductContainerPhone style={{ marginBottom: "50px" }}>
            <>
              <SliderContainerPhone a={v} />
            </>

            {v.uid == "5" ? (
              ""
            ) : (
              <NameDesigner style={{ margin: "30px" }}>
                Alan Hannah
              </NameDesigner>
            )}
          </ProductContainerPhone>
        </>
      ))}
    </DesignersContainer>
  );
}

export default AlanHannah;
