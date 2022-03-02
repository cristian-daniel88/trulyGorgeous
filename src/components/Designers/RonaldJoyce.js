import React from 'react'
import { designers } from '../../database/designers'
import { BrandDesigner, DesignersContainer, NameDesigner } from './DesignersStyles'


function RonaldJoyce() {
  return (
    <DesignersContainer>
      <BrandDesigner img={designers[0].brand} w='300px' h='100px' />

    </DesignersContainer>
  )
}

export default RonaldJoyce