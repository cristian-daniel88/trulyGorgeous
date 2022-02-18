import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowLeft, ArrowLeftPhone, ArrowRight, ArrowRightPhone, ArrowsBox, ArrowsBoxL, ArrowsBoxR, ArrowsColumnLeft, ArrowsColumnRight, ArrowsContainer } from './ArrowsStyles'
import {sliderManual} from '../../redux/slider/sliderActions'
function Arrows({countFunction, cuenta}) {

  const hover = useSelector((state)=> state.slider.hover);
  const dispatch = useDispatch();
  
  const nextPhoto = () => {
    dispatch(sliderManual())
    if(cuenta == 3){
      countFunction(1)
      return
   }  
    countFunction(cuenta + 1);
  }

  const backPhoto = () => {
    dispatch(sliderManual())
    if(cuenta == 1){
      countFunction(3)
      return
   }  
    countFunction(cuenta - 1);
  }


  return (
    <>
    <ArrowsContainer>
        <ArrowsColumnLeft>
          <ArrowsBoxL>
             
              <ArrowLeftPhone onClick={backPhoto}/>
              <ArrowLeft hover={hover ? 'true' : 'false'} onClick={backPhoto}/>
          </ArrowsBoxL>
        </ArrowsColumnLeft>
        <ArrowsColumnRight>
          <ArrowsBoxR>
       
              <ArrowRightPhone onClick={nextPhoto}/>
              <ArrowRight hover={hover ? 'true' : 'false'} onClick={nextPhoto}/>
          </ArrowsBoxR>
        </ArrowsColumnRight>
    </ArrowsContainer>
    </>
  )
}

export default Arrows