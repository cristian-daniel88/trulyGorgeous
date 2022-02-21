import React, { useState } from 'react'
import { ContainerLogoAndH2, Designer, H1Container, Header, Li, LinkA, Logo, LogoContainer, MenuBurguer, Navegador, Ul, LinkAHome, PopUp, PopUpAlterations, UlAlterations, LiAlterations, UlWeddingDresses, LiWeddingDresses, PopUpWeddingDresses } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';



function Nav() {
  const [focuss, setFocuss] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  
  const toggleMenu = () => {
      dispatch(toggleHamburguerHidden())
  }


  

  const fucusHome = () => {
      setFocuss(false)
  }

  return (
    <Header>

        <ContainerLogoAndH2>

        <LogoContainer>
        <Logo/>
        </LogoContainer>

        <H1Container>
            <Designer>
                DESIGNER & BESPOKE BRIDAL WEAR
            </Designer>
        </H1Container>

        </ContainerLogoAndH2>

        <Navegador>
            <Ul>
                <Li ><LinkAHome focuss={focuss == true ? 'true' : 'false'} to={'/'}>Home</LinkAHome></Li>
                <Li onClick={fucusHome}><LinkA to='./about-us'>About Us</LinkA></Li>
                <Li onClick={fucusHome}>Wedding Dresses
                <PopUpWeddingDresses>
                    <UlWeddingDresses>
                        <LiWeddingDresses>
                            Sales
                        </LiWeddingDresses>
                    </UlWeddingDresses>
                </PopUpWeddingDresses>
                </Li>
                <Li onClick={fucusHome}>Our Brides</Li>
                <Li onClick={fucusHome}>Designers</Li>
                <Li onClick={fucusHome}>Alterations 
                <PopUpAlterations>
                    <UlAlterations>
                        <LiAlterations>Our Creations</LiAlterations>
                    </UlAlterations>
                </PopUpAlterations>
                </Li>
              
                <Li onClick={fucusHome}>Blog</Li>
                <Li onClick={fucusHome}>Contact</Li>
            </Ul>
        <MenuBurguer onClick={toggleMenu}/>
        </Navegador>

    </Header>
  )
}

export default Nav