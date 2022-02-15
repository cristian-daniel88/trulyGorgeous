import React from 'react'
import { Header, Li, Logo, LogoContainer, MenuBurguer, Navegador, Ul } from './NavStyles'

function Nav() {
  return (
    <Header>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
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