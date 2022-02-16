import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { ButtonBurguer, ButtonBurguerContainer, ButtonMenu, ButtonMenuLanguage, DetailsLanguage, LiBurguer, Menu, MenuContainer, NavBurguer, UlBurguer } from './ToggleMenuStyles';

function ToggleMenu() {
  const toggle = useSelector((state) => state.hamburguer.hidden);
  const dispatch = useDispatch()
  const toggleMenu = () => {
    dispatch(toggleHamburguerHidden())
}

  return (
    <Menu toggle={toggle}>
        <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LiBurguer>
              <ButtonMenu >
                Home
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu> 
                About us
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu> 
                Wedding Dresses
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu>
              Our Brides    
             </ButtonMenu>
            </LiBurguer>
            
            <LiBurguer >
              <ButtonMenu> 
               Designers
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu> 
                Our Creations
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu> 
                  Sale
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu>
                  Blog     
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer >
              <ButtonMenu> 
               Contact
              </ButtonMenu>
            </LiBurguer>

          
          </UlBurguer>

          <ButtonBurguerContainer>
            <ButtonMenu onClick={toggleMenu}>
              <ButtonBurguer toggle={toggle ? 'true' : 'false'}/>
            </ButtonMenu>
          </ButtonBurguerContainer>
        </NavBurguer>
      </MenuContainer>
    </Menu>
  )
}

export default ToggleMenu