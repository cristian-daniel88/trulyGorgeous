import React, { useEffect, useState } from 'react'
import { BodyHome } from './HomeBodyStyles'


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


  console.log(count)



  

  return (
    <>
    {count === 1 && (<BodyHome image={`./assets/banner${count}.jpg`}/>)}
    {count === 2 && (<BodyHome image={`./assets/banner${count}.jpg`}/>)}
    {count === 3 && (<BodyHome image={`./assets/banner${count}.jpg`}/>)}


    </>
  )
}

export default HomeBody