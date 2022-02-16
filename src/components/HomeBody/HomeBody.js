import React, { useEffect, useState } from 'react'
import { BodyHome } from './HomeBodyStyles'
import Arrows from '../Arrows/Arrows'
import Balls from '../Balls/Balls'


function HomeBody() {
  const [count, setCount] = useState(1)

  useEffect(() => {
     
    setTimeout(() => {
        if(count == 3){
            setCount(1)
            return
         }
        setCount(count + 1)
    }, 6000);
    
  }, [count])


  



  

  return (
    <>
    {count === 1 && (<BodyHome image={`./assets/banner${count}.jpg`}>
      
    </BodyHome>)}
    {count === 2 && (<BodyHome image={`./assets/banner${count}.jpg`}>
   
    </BodyHome>)}
    {count === 3 && (<BodyHome image={`./assets/banner${count}.jpg`}>
     
    </BodyHome>)}
    <Arrows/>
    <Balls bola={count}/>
    </>
  )
}



export default HomeBody