import React from 'react'
import { useSelector } from 'react-redux'
import { ArrowLeft, ArrowLeftPhone, ArrowRight, ArrowRightPhone, ArrowsBox, ArrowsColumn, ArrowsContainer } from './ArrowsStyles'

function Arrows() {
  const hover = useSelector((state)=> state.slider.hover)
  console.log(hover)
  return (
    <ArrowsContainer>
        <ArrowsColumn>
          <ArrowsBox>
              <ArrowLeft hover={hover}/>
              <ArrowLeftPhone/>
          </ArrowsBox>
        </ArrowsColumn>
        <ArrowsColumn>
          <ArrowsBox>
              <ArrowRight hover={hover}/>
              <ArrowRightPhone/>
          </ArrowsBox>
        </ArrowsColumn>
    </ArrowsContainer>
  )
}

export default Arrows