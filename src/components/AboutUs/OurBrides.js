import React from 'react'
import { DesignersContainer, NameDesigner } from '../Designers/DesignersStyles'
import { TestimonialsImg } from './OurBridesStyles'

function OurBrides() {
  return (
    <DesignersContainer>
          <NameDesigner>Our Brides</NameDesigner>
      <div
      style={{
        'display':'flex',
        'justifyContent':'center',
      }}
      >

      <TestimonialsImg src="./assets/1.jpg" alt="our brides"/>

      
      </div>

      <div
      style={{
        'display':'flex',
        'justifyContent':'center', 
      }}
      >

      <TestimonialsImg src='./assets/2.jpg' alt="our brides"/>
      </div>

      
    </DesignersContainer>
  )
}

export default OurBrides