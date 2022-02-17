import React from 'react'
import { BallsContainer, Bola } from './BallsStyles'

function Balls({bola}) {

  return (
    <BallsContainer>
        <Bola bolaColor={bola == 1 && '#8eccf454'}/>
        <Bola bolaColor={bola == 2 && '#8eccf454'}/>
        <Bola bolaColor={bola == 3 && '#8eccf454'}/>    
    </BallsContainer>
  )
}

export default Balls