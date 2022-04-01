import React, { useState } from 'react'
import { MainPhotoContainer } from './DesignersStyles'

function MainPhoto({front , back}) {
 const [backFront, setBackFront] = useState(false);

  const changePhotoBack = () => {
    setBackFront(true)
  }

  const changePhotoFront = () => {
    setBackFront(false)
  }

  const changePhoto = () => {
    if (backFront) {
      setBackFront(false)
      return
    }
    setBackFront(true)
    return
  }
  return (
  
          <MainPhotoContainer src={backFront ? back : front} onMouseEnter={changePhotoBack} onMouseLeave={changePhotoFront} onClick={changePhoto}>
             
           </MainPhotoContainer>
   
  )
}

export default MainPhoto