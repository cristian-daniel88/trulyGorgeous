import React from 'react'
import { LettersContainer,ButtonContainer, TitleContainer, TitleH2, Button1 } from './LettersStyles'

function Letters({letters, button, cuenta }) {

  const handleButton = () =>{
   
    if(cuenta == 1) {
      console.log('1')
      return
    }
    if (cuenta == 2) {
      console.log('2')
      return
    }

    if (cuenta == 3) {
      console.log('3')
      return
    }

  }

  return (
    <LettersContainer>
      <TitleContainer>
        <TitleH2>
        {letters}
        </TitleH2>
      </TitleContainer>
      <ButtonContainer>
        <Button1 onClick={handleButton}>
        {button}
        </Button1>
      </ButtonContainer>
    </LettersContainer>
  )
}

export default Letters