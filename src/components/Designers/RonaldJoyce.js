import React from 'react'
import { designers } from '../../database/designers'
import { BrandDesigner, DesignersContainer, GridPhotoContainer, MainPhotoContainer, ProductContainer} from './DesignersStyles'


function RonaldJoyce() {

  const ronaldModelsObject = designers[0].models

  console.log(ronaldModelsObject)
 

  return (
    <DesignersContainer>
      <BrandDesigner img={designers[0].brand} w='200px' h='100px' />
      {ronaldModelsObject.map((value, key) => (
            <ProductContainer key={key}>
            <MainPhotoContainer img={value.imgs[0]}>
             
            </MainPhotoContainer>
            <GridPhotoContainer></GridPhotoContainer>
          </ProductContainer>
      ))}
     

    </DesignersContainer>
  )
}

export default RonaldJoyce