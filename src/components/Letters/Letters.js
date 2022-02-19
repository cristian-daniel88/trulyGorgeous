import React from 'react'
import { LettersContainer,ButtonContainer, TitleContainer, TitleH1, Button1, SubTitleContainer, Subtitle, ATelephon, Phone, PhoneContainer } from './LettersStyles'

function Letters({titulo,letters, button, cuenta }) {

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
        <TitleH1>
        {titulo}
        </TitleH1>
      </TitleContainer>
      <SubTitleContainer>
        <Subtitle>
          {letters}
        </Subtitle>
      </SubTitleContainer>
      <ButtonContainer>
        {
          cuenta == 1 ? (<ATelephon href={`tel:${button}`}><div>{button}</div>&nbsp; &nbsp;<PhoneContainer><Phone/></PhoneContainer> </ATelephon>) : (<Button1 onClick={handleButton}>{button}</Button1>)
        }
        
      </ButtonContainer>
    </LettersContainer>
  )
}

export default Letters