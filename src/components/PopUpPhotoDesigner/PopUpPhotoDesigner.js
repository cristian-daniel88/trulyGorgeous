import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';
import { CloseContainer, CloseIcon, MarcoPhoto, PhotoPopUp, PopUpPhoto } from './PopUpPhotoDesignerStyles'

function PopUpPhotoDesigner() {
  const popUpPhoto =  useSelector(state => state.popUpDesigner);
  
  const dispatch = useDispatch()
  const click = (value , boolean) => {
    dispatch(clickPopUpPhoto(value))
  }
  return (
    <PopUpPhoto toggle={popUpPhoto.hidden ? 'true' : 'false'} onClick={()=> {click('', false)}}>
      <MarcoPhoto w={popUpPhoto.imgUrl} anchoOurBrides={popUpPhoto.imgUrl.split('/')[7] == 'ourBrides' ? 'true' : 'false'}>
      <CloseContainer onClick={()=>click('', false)}>
        <CloseIcon/>
      </CloseContainer>
      
      {console.log(popUpPhoto.imgUrl.split('/')[7])}

      {popUpPhoto.imgUrl.split('/')[7] == 'ourBrides' ? (<><PhotoPopUp img={popUpPhoto.imgUrl} width='90%'/></>) : (<><PhotoPopUp src={popUpPhoto.imgUrl}/></>)}
      </MarcoPhoto>
    </PopUpPhoto>
  )
}

export default PopUpPhotoDesigner