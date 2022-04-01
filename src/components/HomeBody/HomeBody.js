import React, { useEffect, useState } from 'react'
import { BodyHome } from './HomeBodyStyles'
import Arrows from '../Arrows/Arrows'
import Balls from '../Balls/Balls'
import { useDispatch, useSelector } from 'react-redux'
import { hoverSlider, sliderManual } from '../../redux/slider/sliderActions'
import { countPlus, countPut } from '../../redux/count/countActions'








function HomeBody({toggle}) {
  const count2 = useSelector(state => state.count.count)
  //console.log(count2)
  const [count, setCount] = useState(1);


  
  const [opaci , setOpaci] = useState(1);
  
  const dispatch = useDispatch()
  const stopAutoSlider = useSelector((state)=> state.slider.slider)
  
  const stopSlider = () => {
    dispatch(sliderManual(false))
    dispatch(hoverSlider(true));

    return
  }

  const activateSlider = (value) => {
    dispatch(hoverSlider(value))
  } 



  

  useEffect(() => {
    

    if (!stopAutoSlider) {
      let timer = setTimeout(()=> {
        setOpaci(1)
        if(count2 == 3){
          setCount(1);
          dispatch(countPut(1))
          return
       }
       setCount(count2 + 1);
       dispatch(countPlus())
      } , 4000);

      let timerOpacity1 = setTimeout(()=> {
          setOpaci(.5)
      } , 3000);

      let timerOpacity2 = setTimeout(()=> {
        setOpaci(.4)
      } , 3100);

      let timerOpacity3 = setTimeout(()=> {
        setOpaci(.3)
      } , 3200);

      let timerOpacity4 = setTimeout(()=> {
        setOpaci(.2)
      } , 3300);

      let timerOpacity5 = setTimeout(()=> {
        setOpaci(.1)
      } , 3400);

      let timerOpacity6 = setTimeout(()=> {
        setOpaci(0)
      } , 3500);


      







      return () => {
        clearTimeout(timer);
        clearTimeout(timerOpacity1);
        clearTimeout(timerOpacity2);
        clearTimeout(timerOpacity3);
        clearTimeout(timerOpacity4);
        clearTimeout(timerOpacity5);
        clearTimeout(timerOpacity6)
        
        
      }

    }

    
    
  }, [count2])


  



  

  return (
   
    <div onMouseEnter={() => activateSlider(true)} onMouseLeave={ () => activateSlider(false) } style={{'overflowX':'hidden'}} onClick={stopSlider}>

    {count2 === 1 && (<BodyHome image={`./assets/banner${count2}.jpg`} op={opaci} indx={count2} toggle={toggle}>


    {/* <Letters titulo={'Truly Gorgeous'} letters={'Bridalwear'} button={'01243 788090'} cuenta={count} />   */}



    
    </BodyHome>)}

    {count2 === 2 && (<BodyHome image={`./assets/banner${count2}.jpg`} op={opaci} indx={count2}>

    <div
    style={{
      'position':'absolute',
      'bottom':'0',
      'right':'10px'
    }}
    >
      <p
      style={{
        'fontSize':'10px',
        'color':'white'

      }}
      >
        MALCOLM HARRIS | PHOTOGRAPHY
      </p>
    </div>
    {/* <Letters titulo={'titulo 2'} letters={'letters 2'} button={'button 2'} cuenta={count}/> */}


  
    </BodyHome>)}

    {count2 === 3 && (<BodyHome image={`./assets/banner${count2}.jpg`} op={opaci}  indx={count2}>
    {/* <Letters  titulo={'titulo 3'}  letters={'letters3'} button={'button 3'} cuenta={count}/>  */}


    
  
    </BodyHome>)}

    <Arrows countFunction={setCount} cuenta={count2}/>
    <Balls bola={count2}/>


   

    


    </div>
  )
}



export default HomeBody