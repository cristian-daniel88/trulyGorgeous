import React, { useState } from "react";
import {
  ContainerLogoAndH2,
  Designer,
  H1Container,
  Header,
  Li,
  LinkA,
  Logo,
  LogoContainer,
  MenuBurguer,
  Navegador,
  Ul,
  LinkAHome,
  PopUp,
  PopUpUl,
  PopUpLi,
  BoxContact,
  IconFaceBook,
  IconInstagram,
  IconPhone,
  AInstagram,
  TelophoneNumber,
  TelephoneNumber2,
} from "./NavStyles";

import { useDispatch, useSelector } from "react-redux";
import { toggleHamburguerHidden } from "../../redux/hamburguer/hamburguerActions";
import {
  hoverPopDesigners,
  hoverPopUpAboutUs,
  hoverPopUpAlterations,
  hoverPopUpWeddingDresses,
} from "../../redux/popUp/popUpActions";

function Nav() {
  const [focuss, setFocuss] = useState(true);
  
  const dispatch = useDispatch();
  const popAbout = useSelector((state) => state.popUp.hover1);
  const popUpWed = useSelector((state) => state.popUp.hover3);
  const popUpAlt = useSelector((state) => state.popUp.hover2);
  const popUpDes = useSelector((state) => state.popUp.hover4);
  const toggle = useSelector((state) => state.hamburguer.hidden);
  
  const popUpAboutIn = () => {
    dispatch(hoverPopUpAboutUs(true));
    setFocuss(false);
  };

  const popUpAboutOut = () => {
    dispatch(hoverPopUpAboutUs(false));
    setFocuss(false);
  };

  const popUpWeddingIn = () => {
    dispatch(hoverPopUpWeddingDresses(true));
    setFocuss(false);
  };

  const popUpWeddingOut = () => {
    dispatch(hoverPopUpWeddingDresses(false));
    setFocuss(false);
  };

  const popUpAlterationsIn = () => {
    dispatch(hoverPopUpAlterations(false));
    setFocuss(false);
  };

  const popUpAlterationsOut = () => {
    dispatch(hoverPopUpAlterations(true));
    setFocuss(false);
  };

  const popUpDesignersIn = () => {
    dispatch(hoverPopDesigners(true));
    setFocuss(false);
  };

  const popUpDesignersOut = () => {
    dispatch(hoverPopDesigners(false));
    setFocuss(false);
  };

  const toggleMenu = (boleano) => {
    if (toggle) {
     dispatch(toggleHamburguerHidden(false));
     return
    }
    dispatch(toggleHamburguerHidden(true));
    return
  };

  const fucusHome = () => {
    setFocuss(false);
  };

  return (
    <Header>
      <TelephoneNumber2 href="tel:01243788090" target="_blank">
        <IconPhone style={{ fontSize: "1.3em", color: "rgb(72, 64, 64)" }} />
        &nbsp;
        <div style={{ color: "rgb(72, 64, 64)" }}>01243788090</div>
      </TelephoneNumber2>

      <ContainerLogoAndH2>
          <LogoContainer >
        <LinkA to="/" >
            <Logo  onClick={() => dispatch(toggleHamburguerHidden(false))} />
            
        </LinkA>
          </LogoContainer>

        <H1Container>
          <Designer>DESIGNER & BESPOKE BRIDAL WEAR</Designer>
        </H1Container>
      </ContainerLogoAndH2>

      <Navegador>
        <Ul>
          <Li>
            <LinkAHome focuss={focuss == true ? "true" : "false"} to={"/"}>
              Home
            </LinkAHome>
          </Li>

          <Li onClick={fucusHome}>
            <LinkA to={"/about-us"}>
              <div onClick={popUpAboutOut}>About Us</div>
            </LinkA>
           
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpWeddingIn}
            onMouseLeave={popUpWeddingOut}
          >
            <LinkA to={"/wedding-dresses"}>
              <div onClick={popUpWeddingOut}>Wedding Dresses</div>
            </LinkA>
            <PopUp popUp={popUpWed ? "true" : "false"}>
              <PopUpUl popUp={popUpWed ? "true" : "false"}>
                <LinkA to={"/fairytale"}>
                  <PopUpLi onClick={popUpWeddingOut}>Fairytale</PopUpLi>
                </LinkA>

                <LinkA to={"/romantic"}>
                  <PopUpLi onClick={popUpWeddingOut}>Romantic</PopUpLi>
                </LinkA>

                <LinkA to={"/sophisticated"}>
                  <PopUpLi onClick={popUpWeddingOut}>Sophisticated</PopUpLi>
                </LinkA>

                <LinkA to={"/elegant"}>
                  <PopUpLi onClick={popUpWeddingOut}>Elegant</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpDesignersIn}
            onMouseLeave={popUpDesignersOut}
          >
            <LinkA to={"/designers"}>
              <div onClick={popUpDesignersOut}>Designers</div>
            </LinkA>
            <PopUp
              popUp={popUpDes ? "true" : "false"}
              style={{ width: "180px" }}
            >
              <PopUpUl popUp={popUpDes ? "true" : "false"}>
                <LinkA to={"/paloma-blanca"}>
                  <PopUpLi onClick={popUpDesignersOut}>Paloma Blanca</PopUpLi>
                </LinkA>

                <LinkA to="/ronald-joyce">
                  <PopUpLi onClick={popUpDesignersOut}>Ronald Joyce</PopUpLi>
                </LinkA>

                <LinkA to={"/victoria-jane"}>
                  <PopUpLi onClick={popUpDesignersOut}>Victoria Jane</PopUpLi>
                </LinkA>

                <a href={"https://dianelegrandbridal.com"} target="_blank">
                  <PopUpLi onClick={popUpDesignersOut}>Diane Legrand</PopUpLi>
                </a>

                
                <LinkA to={"/alan-hannah"}>
                  <PopUpLi onClick={popUpDesignersOut}>Alan Hannah</PopUpLi>
                </LinkA>

                <LinkA to={"/sofia-bianca"}>
                  <PopUpLi onClick={popUpDesignersOut}>Sofia Bianca</PopUpLi>
                </LinkA>


                

                <LinkA to={"/lusan-mandongus"}>
                  <PopUpLi onClick={popUpDesignersOut}>Lusan Mandongus</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpAlterationsOut}
            onMouseLeave={popUpAlterationsIn}
          >
            <LinkA to={"/alterations"}>
              <div onClick={popUpAlterationsIn}>Alterations</div>
            </LinkA>
            <PopUp
              popUp={popUpAlt ? "true" : "false"}
              style={{ width: "140px" }}
            >
              <PopUpUl popUp={popUpAlt ? "true" : "false"}>
                <LinkA to={"/price-list"}>
                  <PopUpLi onClick={popUpAlterationsIn}>Price list</PopUpLi>
                </LinkA>

                <LinkA to={"/our-creations"}>
                  <PopUpLi onClick={popUpAlterationsIn}>Our Creations</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li onClick={fucusHome}>
            <LinkA to="/testimonials">Testimonials</LinkA>
          </Li>

          <Li onClick={fucusHome}>
            <LinkA to="/contact">Contact</LinkA>
          </Li>
        </Ul>
        <MenuBurguer onClick={toggleMenu} />
      </Navegador>
      <BoxContact>
        <a
          style={{ cursor: "pointer", zIndex: "1000000", color: "#3B5998" }}
          href="https://www.facebook.com/trulygorgeousweddingdresses"
          target="_blank"
        >
          <IconFaceBook />
        </a>
        <AInstagram
          style={{ cursor: "pointer", zIndex: "1000000" }}
          href="https://www.instagram.com/trulygorgeousbridal"
          target="_blank"
        >
          <IconInstagram />
        </AInstagram>

        <a
          style={{
            cursor: "pointer",
            zIndex: "1000000",
            display: "flex",
            color: "#484040",
          }}
          href="tel:01243788090"
          target="_blank"
        >
          <IconPhone></IconPhone> &nbsp;
          <TelophoneNumber>01243788090</TelophoneNumber>
        </a>
      </BoxContact>
    </Header>
  );
}

export default Nav;
