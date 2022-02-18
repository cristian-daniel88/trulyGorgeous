import React from 'react'
import { LettersContainer,ButtonContainer, TitleContainer, TitleH2, Button } from './LettersStyles'

function Letters({letters, button }) {
  return (
    <LettersContainer>
      <TitleContainer>
        <TitleH2>
        {letters}
        </TitleH2>
      </TitleContainer>
      <ButtonContainer>
        <Button>
        {button}
        </Button>
      </ButtonContainer>
    </LettersContainer>
  )
}

export default Letters