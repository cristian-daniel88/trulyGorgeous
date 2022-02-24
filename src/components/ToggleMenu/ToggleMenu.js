import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { ButtonBurguer, ButtonBurguerContainer, ButtonMenu,DetailsLanguage,LiBurguer, Menu, MenuContainer, NavBurguer, SummaryLanguage, UlBurguer } from './ToggleMenuStyles';

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
              HOME
              </ButtonMenu>
            </LiBurguer>

            <DetailsLanguage>
              <SummaryLanguage>
                ABOUT US
              </SummaryLanguage>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
                OUR BRIDES
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px', 'marginBottom':'-10px'}}>
                TESTIMONIAL
              </ButtonMenu>
            </DetailsLanguage>

            <DetailsLanguage>
              <SummaryLanguage> 
               WEDDING DRESSES
              </SummaryLanguage>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
               FAIRYTALE
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
               ROMANTIC
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
               SOPHISTICATED
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
               ELEGANT
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px', 'marginBottom':'-10px'}}>
               SALE
              </ButtonMenu>

            </DetailsLanguage>

            <LiBurguer >
              <ButtonMenu>
              DESIGNERS  
             </ButtonMenu>
            </LiBurguer>
            
            <DetailsLanguage>
              <SummaryLanguage>
                ALTERATIONS
              </SummaryLanguage>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px'}}>
               PRICE LIST
              </ButtonMenu>
              <ButtonMenu style={{'fontSize': '12px ', 'display':'block', 'marginTop':'15px', 'marginBottom':'-10px'}}>
               OUR CREATIONS
              </ButtonMenu>
            </DetailsLanguage>

            <LiBurguer >
              <ButtonMenu> 
               CONTACT
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