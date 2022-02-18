import React, { useEffect, useState } from 'react'
import { BodyHome } from './HomeBodyStyles'
import Arrows from '../Arrows/Arrows'
import Balls from '../Balls/Balls'
import { useDispatch, useSelector } from 'react-redux'
import { hoverSlider } from '../../redux/slider/sliderActions'
import Letters from '../Letters/Letters'


function HomeBody() {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  const stopAutoSlider = useSelector((state)=> state.slider.slider)
  console.log(stopAutoSlider)

  const activateSlider = () => {
    dispatch(hoverSlider())
  }

  useEffect(() => {
    if(!stopAutoSlider){
      setTimeout(() => {
        if(count == 3){
            setCount(1)
            return
         }
        setCount(count + 1)
    }, 6000);
    }

    
  }, [count])


  



  

  return (
    <div onMouseEnter={activateSlider} onMouseLeave={activateSlider} >

    {count === 1 && (<BodyHome image={`./assets/banner${count}.jpg`}>
    <Letters/>  
    </BodyHome>)}

    {count === 2 && (<BodyHome image={`./assets/banner${count}.jpg`}>
    <Letters/>
    </BodyHome>)}
    
    {count === 3 && (<BodyHome image={`./assets/banner${count}.jpg`}>
    <Letters/> 
    </BodyHome>)}

    <Arrows countFunction={setCount} cuenta={count}/>
    <Balls bola={count}/>

    </div>
  )
}



export default HomeBody