
import React from 'react'


import { Flecha, PhotoMain,  Scrollsito,  ScrollsitoArrow,  ScrollsitoPoin,  SliderContainerA, SliderContainerPhotoMain } from './SliderContainerStyles'
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';

function SliderContainer({photoMain, i}) {
 const dispatch = useDispatch()

 

  const click = (value, booleano) => {
  
    dispatch(clickPopUpPhoto(value, booleano))
 
  }
  return (

    <SliderContainerA key={uuidv4()} >


            <SliderContainerPhotoMain>
                <Scrollsito>
                    <ScrollsitoArrow>
                        <ScrollsitoPoin>
                              <Flecha/>
                        </ScrollsitoPoin>
                    </ScrollsitoArrow>
                </Scrollsito>
                {photoMain.map((value, key)=> (
                   <>
                    <PhotoMain src={value} key={uuidv4()} onClick={()=> click(value, true)}>
                        
                  
                    </PhotoMain>
             
                   </>
                    
                    ))}
            </SliderContainerPhotoMain>
           
    </SliderContainerA>
  )
}

export default SliderContainer