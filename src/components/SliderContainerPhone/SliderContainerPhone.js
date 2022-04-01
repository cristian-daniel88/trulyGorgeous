import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

import {
  ButtonsArrowIconL,
  ButtonsArrowIconR,
  ButtonsContainer,
  ButtonsIconsContainer,
  ImagenContainerDesigner,
  ImgDesignerModel,
  PhoneCard,
  PhoneCardTitleContainer,
} from "./SliderContainerPhoneStyles";

function SliderContainerPhone({ a }) {
  //console.log(a.imgs.length)
  const dispatch = useDispatch();

  const click = (value, boleano) => {
    console.log(value);
    dispatch(clickPopUpPhoto(value, boleano));
  };
  const [foto, setFoto] = useState(0);

  const nextPhoto = () => {
    if (foto >= a.imgs.length - 1) {
      setFoto(0);
      return;
    }

    setFoto(foto + 1);
  };

  const backPhoto = () => {
    if (foto <= 0) {
      setFoto(a.imgs.length - 1);
      return;
    }

    setFoto(foto - 1);
  };

  return (
    <PhoneCard>
      <ImagenContainerDesigner>
        <ImgDesignerModel
          img={a.imgs[foto]}
          onClick={() => click(a.imgs[foto], true)}
        />
      </ImagenContainerDesigner>

      <PhoneCardTitleContainer>{a.description}</PhoneCardTitleContainer>

      {a.imgs[1] && (
        <ButtonsContainer>
          <ButtonsIconsContainer onClick={backPhoto}>
            <ButtonsArrowIconL />
          </ButtonsIconsContainer>
          <ButtonsIconsContainer onClick={nextPhoto}>
            <ButtonsArrowIconR />
          </ButtonsIconsContainer>
        </ButtonsContainer>
      )}
    </PhoneCard>
  );
}

export default SliderContainerPhone;
