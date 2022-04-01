import React from 'react'
import { AInstagram, IconFaceBook, IconInstagram, IconPhone, TelophoneNumber } from '../Nav/NavStyles'
import {AsideFinal } from './AssetsBottomStyles'

function AssetsBottom() {
  return (
    <AsideFinal>
        <a style={{'cursor':'pointer', 'zIndex':'0', 'color':'#3B5998' ,'border':'none'}} href='https://www.facebook.com/trulygorgeousweddingdresses' target='_blank'>
          <IconFaceBook style={{'background':'white', 'borderRadius': '50%' , 'marginLeft':'20px' , 'position':'relative' , "zIndex":'0'}}/>
          </a>


          <AInstagram style={{'cursor':'pointer', 'zIndex': '0', 'marginLeft':'20px', 'marginTop':'-3px' }} href='https://www.instagram.com/trulygorgeousbridal' target='_blank'>
          <IconInstagram/>
          </AInstagram>


          <a style={{'cursor':'pointer', 'zIndex': '1000000', 'display':'flex', 'color': '#484040', 'marginLeft':'20px' , 'marginRight':'20px'}} href='tel:01243788090' target='_blank'>
          <IconPhone style={{'color':'white'}}></IconPhone> &nbsp;
          <TelophoneNumber style={{'color':'white'}}>
            01243788090
          </TelophoneNumber>
          </a>
        
       
    </AsideFinal>
  )
}

export default AssetsBottom