import React from 'react'
import { ContainerLogoAndH2, H1, H1Container, Header, Li, LinkA, Logo, LogoContainer, MenuBurguer, Navegador, Ul } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { Link } from 'react-router-dom';


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
                <Li><LinkA to={'/'}>Home</LinkA></Li>
                <Li><LinkA to={'/about-us'}>About Us</LinkA> </Li>
                <Li><LinkA to={'/'}>Wedding Dresses</LinkA></Li>
                <Li><LinkA to={'/'}>Our Brides</LinkA></Li>
                <Li><LinkA to={'/'}>Designers</LinkA></Li>
                <Li><LinkA to={'/'}>Our Creations</LinkA></Li>
                <Li><LinkA to={'/'}>Sale</LinkA></Li>
                <Li><LinkA to={'/'}>Blog</LinkA></Li>
                <Li><LinkA to={'/'}>Contact</LinkA></Li>

            </Ul>
        <MenuBurguer onClick={toggleMenu}/>
        </Navegador>

    </Header>
  )
}

export default Nav