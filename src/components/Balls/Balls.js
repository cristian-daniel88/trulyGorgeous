import React from 'react'
import { useDispatch } from 'react-redux'
import { countPut } from '../../redux/count/countActions'
import { BallsContainer, Bola } from './BallsStyles'

function Balls({bola}) {
  const dispatch = useDispatch()

  const changeBola = (v) => {

    dispatch(countPut(v))
  }

  return (
    <BallsContainer>
        <Bola bolaColor={bola == 1 && '#8eccf454'} onClick={()=> changeBola(1)}/>
        <Bola bolaColor={bola == 2 && '#8eccf454'} onClick={() =>changeBola(2)}/>
        <Bola bolaColor={bola == 3 && '#8eccf454'} onClick={() =>changeBola(3)}/>    
    </BallsContainer>
  )
}

export default Balls