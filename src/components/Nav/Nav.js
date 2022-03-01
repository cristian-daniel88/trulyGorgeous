import React, { useState } from 'react'
import { ContainerLogoAndH2, Designer, H1Container, Header, Li, LinkA, Logo, LogoContainer, MenuBurguer, Navegador, Ul, LinkAHome, PopUp, PopUpAlterations, UlAlterations, LiAlterations, UlWeddingDresses, LiWeddingDresses, PopUpWeddingDresses, PopUpAboutUs, PopUpUl, PopUpLi, BoxContact, IconFaceBook, IconInstagram, IconPhone, AInstagram, TelophoneNumber, TelephoneNumber2 } from './NavStyles'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburguerHidden } from '../../redux/hamburguer/hamburguerActions';
import { hoverPopDesigners, hoverPopUpAboutUs, hoverPopUpAlterations, hoverPopUpWeddingDresses } from '../../redux/popUp/popUpActions';



function Nav() {
  const [focuss, setFocuss] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()
  const popAbout = useSelector((state)=> state.popUp.hover1);
  const popUpWed = useSelector((state) => state.popUp.hover3);
  const popUpAlt = useSelector((state) => state.popUp.hover2);
  const popUpDes = useSelector((state)=> state.popUp.hover4);


  

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

  const popUpDesigners = () => {
      dispatch(hoverPopDesigners())
      setFocuss(false)
  }

  
  const toggleMenu = () => {
      dispatch(toggleHamburguerHidden())
  }

  const pushVictoriaJanes = () => {
      history.push('/designers/victoria-janes')
  }

  const pushRonaldJoyce = () => {
    history.push('/designers/ronald-joyce')
  }


  

  const fucusHome = () => {
      setFocuss(false)
  }

  return (
    <Header>
        <TelephoneNumber2 href='tel:01243788090' target='_blank'>
            <IconPhone style={{'fontSize': '1.3em', 'color':'rgb(72, 64, 64)'}}/>
            &nbsp;
            <div  style={{ 'color':'rgb(72, 64, 64)'}}>

            01243788090
            </div>
        </TelephoneNumber2>

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

                <Li onClick={fucusHome} onMouseEnter={popUpAbout} onMouseLeave={popUpAbout}>
                About Us 
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
                
                </Li>

                <Li onClick={fucusHome} onMouseEnter={popUpWedding} onMouseLeave={popUpWedding}>
                Wedding Dresses
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
              
                </Li>
               
                <Li onClick={fucusHome} onMouseEnter={popUpDesigners} onMouseLeave={popUpDesigners}>
                 Designers
                 <PopUpWeddingDresses popUp={popUpDes ? 'true' : 'false'} style={{height:'80px'}}>
                    <UlWeddingDresses>
                       
                       <LiWeddingDresses onClick={pushRonaldJoyce}>
                            Ronald Joyce
                       </LiWeddingDresses>

                       <LiWeddingDresses onClick={pushVictoriaJanes}>
                            Victoria Jane
                       </LiWeddingDresses>

                    </UlWeddingDresses>
                 </PopUpWeddingDresses>
                 </Li>


                <Li onClick={fucusHome} onMouseEnter={popUpAlterations} onMouseLeave={popUpAlterations}>
               Alterations 
                <PopUpAlterations popUp={popUpAlt ? 'true' : 'false'}>
                    <UlAlterations popUp={popUpAlt ? 'true' : 'false'}>
                        <LiAlterations>Price list</LiAlterations>
                        <LiAlterations>Our Creations</LiAlterations>
                    </UlAlterations>
                </PopUpAlterations>
               
                </Li>
                <Li onClick={fucusHome}>
                    <LinkA to='/contact'>
                    Contact  
                    </LinkA>
                </Li>
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


          <a style={{'cursor':'pointer', 'zIndex': '1000000', 'display':'flex', 'color': '#484040'}} href='tel:01243788090' target='_blank'>
          <IconPhone></IconPhone> &nbsp;
          <TelophoneNumber>
            01243788090
          </TelophoneNumber>
          </a>
      </BoxContact>
    </Header>
  )
}

export default Nav