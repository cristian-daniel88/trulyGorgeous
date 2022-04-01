import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';

import { CloseContainerOurCreations, CloseIconOurCreations, MarcoPhotoOurCreations, PhotoPopUpOurCreations, PopUpPhotoOurCreations } from './PopUpPhotoOurCreationsStyles';

function PopUpPhotoDesignerOurCreations() {
  const popUpPhoto =  useSelector(state => state.popUpDesigner);
  
  const dispatch = useDispatch()
  const click = (value , boolean) => {
    dispatch(clickPopUpPhoto(value))
  }
  return (
    <PopUpPhotoOurCreations toggle={popUpPhoto.hidden ? 'true' : 'false'} onClick={()=> {click('', false)}}>
      <MarcoPhotoOurCreations  resizePadding={popUpPhoto.imgUrl} >
      <CloseContainerOurCreations onClick={()=>click('', false)}>
        <CloseIconOurCreations/>
      </CloseContainerOurCreations>
      
      
    <PhotoPopUpOurCreations src={popUpPhoto.imgUrl}/>
      </MarcoPhotoOurCreations>
    </PopUpPhotoOurCreations>
  )
}

export default PopUpPhotoDesignerOurCreations