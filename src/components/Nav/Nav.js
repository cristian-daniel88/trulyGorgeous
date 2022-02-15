import React from 'react'
import { ContainerLogoAndH2, H2, H2Container, Header, Li, Logo, LogoContainer, MenuBurguer, Navegador, Ul } from './NavStyles'

function Nav() {
  return (
    <Header>

        <ContainerLogoAndH2>

        <LogoContainer>
        <Logo/>
        </LogoContainer>

        <H2Container>
            <H2>
                DESIGNER & BESPOKE BRIDAL WEAR
            </H2>
        </H2Container>

        </ContainerLogoAndH2>

        <Navegador>
            <Ul>
                <Li>Home</Li>
                <Li>About Us</Li>
                <Li>Wedding Dresses</Li>
                <Li>Our Brides</Li>
                <Li>Designers</Li>
                <Li>Our Creations</Li>
                <Li>Sale</Li>
                <Li>Blog</Li>
                <Li>Contact</Li>

            </Ul>
        <MenuBurguer/>
        </Navegador>

    </Header>
  )
}

export default Nav