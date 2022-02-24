import React from 'react'
import { useSelector } from 'react-redux';
import { CoverContainer } from './CoverStyles'
function Cover() {
const toggle = useSelector((state) => state.hamburguer.hidden);
  return (
    <CoverContainer toggle={toggle ? 'true' : 'false'}/>
  )
}

export default Cover