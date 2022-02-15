import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Header = styled.header`
width: 100%;
height: auto;
padding: 10px 5%;
position: fixed;
@media screen and (max-width: 865px) {
   display: flex;
  }
`;




export const LogoContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;

`


export const Logo = styled.div`
background-image: url('./assets/logo.png');
width: 20%;
height: 70px;
background-size: contain ;
background-repeat: no-repeat;
cursor: pointer;
@media screen and (max-width: 1300px) {
    width: 60%;
    background-size: contain ;
    background-position: center;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
  }




`;



export const Navegador = styled.nav`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 1300px) {
    justify-content: end;
  }



`

export const Ul = styled.ul`
display: flex;
justify-content: center;
width: 100%;
@media screen and (max-width: 865px) {
    display: none;
  }


`

export const Li = styled.li`
list-style: none;
padding-top: 10px;
margin-left: 20px;
cursor: pointer;
&:hover {
    color: #bf6c4a;

}

`

export const MenuBurguer = styled(FaBars)`
display: none;
@media screen and (max-width: 865px) {
    display: block;
    font-size: 30px;
    margin-top: 10px;
    cursor: pointer;
  }


`