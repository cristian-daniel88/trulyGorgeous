import React from 'react'
import { ContainerLogoAndH2, H1, H1Container, Header, Li, Logo, LogoContainer, MenuBurguer, Navegador, Ul } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';



function Nav() {
    
  const history = useHistory()
  const dispatch = useDispatch()
  
  const toggleMenu = () => {
      dispatch(toggleHamburguerHidden())
  }


  const pushAboutUs = () => {
      history.push('/about-us')
  }

  const pushHome = () => {
      history.push('/')
  }

  return (
    <Header>

        <ContainerLogoAndH2>

        <LogoContainer>
        <Logo/>
        </LogoContainer>

        <H1Container>
            <H1>
                DESIGNER & BESPOKE BRIDAL WEAR
            </H1>
        </H1Container>

        </ContainerLogoAndH2>

        <Navegador>
            <Ul>
                <Li onClick={pushHome}>Home</Li>
               
                <Li onClick={pushAboutUs}>About Us</Li>
                <Li>Wedding Dresses</Li>
                <Li>Our Brides</Li>
                <Li>Designers</Li>
                <Li>Our Creations</Li>
                <Li>Sale</Li>
                <Li>Blog</Li>
                <Li>Contact</Li>

            </Ul>
        <MenuBurguer onClick={toggleMenu}/>
        </Navegador>

    </Header>
  )
}

export default Nav