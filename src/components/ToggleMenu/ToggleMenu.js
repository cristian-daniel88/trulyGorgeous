import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleHamburguerHidden } from "../../redux/hamburguer/hamburguerActions";
import { LinkA } from "../Nav/NavStyles";
import {
  ButtonBurguer,
  ButtonBurguerContainer,
  ButtonMenu,
  DetailsLanguage,
  LiBurguer,
  Menu,
  MenuContainer,
  NavBurguer,
  SummaryLanguage,
  UlBurguer,
} from "./ToggleMenuStyles";

function ToggleMenu() {
  const toggle = useSelector((state) => state.hamburguer.hidden);
  const dispatch = useDispatch();
  const history = useHistory()

  const toggleMenu = () => {
    if (toggle) {
      dispatch(toggleHamburguerHidden(false));
      return
     }
     dispatch(toggleHamburguerHidden(true));
     return
  };

  const pushAlterations = () => {
    history.push('/alterations');
    toggleMenu();
    return
  }

  const pushPriceList = () => {
    history.push('/price-list');
    toggleMenu();
    return
  }

  const pushOurCreations = () => {
    history.push('/our-creations');
    toggleMenu();
    return
  }

  return (
    <Menu toggle={toggle}>
      <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LinkA to={"/"}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>HOME</ButtonMenu>
              </LiBurguer>
            </LinkA>

           

            <LinkA to={"/about-us"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>ABOUT US</ButtonMenu>
              </LiBurguer>
            </LinkA>

        

            <LinkA to={"/wedding-dresses"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>WEDDING DRESSES</ButtonMenu>
              </LiBurguer>
            </LinkA>

            <LinkA to={"/designers"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>DESIGNERS</ButtonMenu>
              </LiBurguer>
            </LinkA>


            <DetailsLanguage open>
              
              <SummaryLanguage onClick={pushAlterations}>ALTERATIONS</SummaryLanguage>
              
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
                onClick={pushPriceList}
              >
                PRICE LIST
              </ButtonMenu>
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
                onClick={pushOurCreations}
              >
                OUR CREATIONS
              </ButtonMenu>
             
           
            </DetailsLanguage>

         
              
      

           
           

      

            <LinkA to={"/testimonials"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>TESTIMONIALS</ButtonMenu>
              </LiBurguer>
            </LinkA>

            <LinkA to={"/contact"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>CONTACT</ButtonMenu>
              </LiBurguer>
            </LinkA>
          </UlBurguer>

          <ButtonBurguerContainer>
            <ButtonMenu onClick={toggleMenu}>
              <ButtonBurguer toggle={toggle ? "true" : "false"} />
            </ButtonMenu>
          </ButtonBurguerContainer>
        </NavBurguer>
      </MenuContainer>
    </Menu>
  );
}

export default ToggleMenu;
