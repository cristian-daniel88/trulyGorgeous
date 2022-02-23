import React, { useState } from 'react'
import { ContainerLogoAndH2, Designer, H1Container, Header, Li, LinkA, Logo, LogoContainer, MenuBurguer, Navegador, Ul, LinkAHome, PopUp, PopUpAlterations, UlAlterations, LiAlterations, UlWeddingDresses, LiWeddingDresses, PopUpWeddingDresses, PopUpAboutUs, PopUpUl, PopUpLi } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { hoverPopUpAboutUs, hoverPopUpWeddingDresses } from '../../redux/popUp/popUpActions';



function Nav() {
  const [focuss, setFocuss] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  const popAbout = useSelector((state)=> state.popUp.hover1);
  const popUpWed = useSelector((state) => state.popUp.hover3)



  const popUpAbout = () => {
    dispatch(hoverPopUpAboutUs());
    setFocuss(false)

  }

  const popUpWedding = () => {
      dispatch(hoverPopUpWeddingDresses())
      setFocuss(false)
  }

  const popUpAlterations = () => {
      
  }


  
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

                <Li onClick={fucusHome}>
                <LinkA to='' onMouseEnter={popUpAbout} onMouseLeave={popUpAbout}>About Us 
                <PopUpAboutUs popUp={popAbout ? 'true' : 'false'}>
                    <PopUpUl popUp={popAbout ? 'true' : 'false'}>
                        <PopUpLi>
                            Our Brides
                        </PopUpLi>
                        <PopUpLi>
                            Testimonials
                        </PopUpLi>
                    </PopUpUl>
                </PopUpAboutUs>
                </LinkA>
                </Li>

                <Li onClick={fucusHome}>
                <LinkA onMouseEnter={popUpWedding} onMouseLeave={popUpWedding} to=''>Wedding Dresses
                <PopUpWeddingDresses  popUp={popUpWed ? 'true' : 'false'}>
                    <UlWeddingDresses>
                    <LiWeddingDresses>
                            Fairytale
                    </LiWeddingDresses>
                    <LiWeddingDresses>
                            Romantic
                    </LiWeddingDresses>
                    <LiWeddingDresses>
                            Sophisticated
                    </LiWeddingDresses>
                    <LiWeddingDresses>
                            Elegant
                    </LiWeddingDresses>
                    <LiWeddingDresses>
                            Sales
                    </LiWeddingDresses>
                    </UlWeddingDresses>
                </PopUpWeddingDresses>
                </LinkA>
                </Li>
               
                <Li onClick={fucusHome}>Designers</Li>
                <Li onClick={fucusHome}>Alterations 
                <PopUpAlterations>
                    <UlAlterations>
                        <LiAlterations>Price list</LiAlterations>
                        <LiAlterations>Our Creations</LiAlterations>
                    </UlAlterations>
                </PopUpAlterations>
                </Li>
              
                
                <Li onClick={fucusHome}>Contact</Li>
            </Ul>
        <MenuBurguer onClick={toggleMenu}/>
        </Navegador>

    </Header>
  )
}

export default Nav