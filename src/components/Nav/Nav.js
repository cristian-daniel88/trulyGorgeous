import React, { useState } from 'react'
import { ContainerLogoAndH2, Designer, H1Container, Header, Li, LinkA, Logo, LogoContainer, MenuBurguer, Navegador, Ul, LinkAHome, PopUp, PopUpAlterations, UlAlterations, LiAlterations, UlWeddingDresses, LiWeddingDresses, PopUpWeddingDresses, PopUpAboutUs, PopUpUl, PopUpLi, BoxContact, IconFaceBook, IconInstagram, IconPhone, AInstagram } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { hoverPopUpAboutUs, hoverPopUpAlterations, hoverPopUpWeddingDresses } from '../../redux/popUp/popUpActions';



function Nav() {
  const [focuss, setFocuss] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  const popAbout = useSelector((state)=> state.popUp.hover1);
  const popUpWed = useSelector((state) => state.popUp.hover3);
  const popUpAlt = useSelector((state) => state.popUp.hover2)



  const popUpAbout = () => {
    dispatch(hoverPopUpAboutUs());
    setFocuss(false)

  }

  const popUpWedding = () => {
      dispatch(hoverPopUpWeddingDresses())
      setFocuss(false)
  }

  const popUpAlterations = () => {
      dispatch(hoverPopUpAlterations())
      setFocuss(false)
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


                <Li onClick={fucusHome}>
                <LinkA to=''  onMouseEnter={popUpAlterations} onMouseLeave={popUpAlterations}>Alterations 
                <PopUpAlterations popUp={popUpAlt ? 'true' : 'false'}>
                    <UlAlterations popUp={popUpAlt ? 'true' : 'false'}>
                        <LiAlterations>Price list</LiAlterations>
                        <LiAlterations>Our Creations</LiAlterations>
                    </UlAlterations>
                </PopUpAlterations>
                </LinkA>
                </Li>
              
                
                <Li onClick={fucusHome}>Contact</Li>
            </Ul>
        <MenuBurguer onClick={toggleMenu}/>
        </Navegador>
      <BoxContact>
          <a style={{'cursor':'pointer', 'zIndex': '1000000', color:'#3B5998' }} href='https://www.facebook.com/trulygorgeousweddingdresses' target='_blank'>
          <IconFaceBook/>
          </a>
          <AInstagram style={{'cursor':'pointer', 'zIndex': '1000000'}} href='https://www.instagram.com/trulygorgeousbridal' target='_blank'>
          <IconInstagram/>
          </AInstagram>
          <a style={{'cursor':'pointer', 'zIndex': '1000000', 'display':'flex'}} href='tel:01243788090' target='_blank'>
          
          <IconPhone></IconPhone>
          <div style={{'marginTop': '5px'}}>
            01243788090
          </div>
          </a>
      </BoxContact>
    </Header>
  )
}

export default Nav