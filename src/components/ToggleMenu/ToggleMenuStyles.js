import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Menu = styled.div`
width: 70%;
height: 100vh;
background-color: aliceblue;
background-color: #f0f4f8;
//background-image: url('./assets/marcaDeAgua.png');

position: fixed;

z-index: 500;
display: none;
transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(-150%)")};
transition: transform 0.6s ease-in-out;
//border-right: solid 1px gold;
//border-top: solid 1px gold;
border-top-right-radius: 10px;

padding-top: 20px;
@media screen and (max-width: 865px) {
display: block;
}

`

export const MenuContainer = styled.div`
height: 100%;
width: 100%;

`

export const NavBurguer = styled.nav`
height: 100%;
display: flex;


`;

export const UlBurguer = styled.ul`
width: 80%;
display: flex;
justify-content: start;
flex-direction: column;
height: 100%;

`;

export const LiBurguer = styled.li`
color: white;
display: block;
margin: 15px;
margin-bottom: 10px;


`;

export  const ButtonBurguerContainer = styled.div`
width: 20%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-end;
color: white;
`;

export const ButtonBurguer = styled(FaBars)`

color:#704949;
font-size: 1.5em;
transform: rotate(90deg);
margin: 5px;
cursor: pointer;
transform: ${(props) => (props.toggle === 'true' ? "rotate(90%)" : "translateX(0%)")};
transition: ${(props) => (props.toggle === 'true' ? "transform 1s ease-in-out" : "transform 1s cubic-bezier(.94,-0.05,1,1)")};
`;
export const DetailsLanguage = styled.details`
color: #683535;
display: block;
margin: 15px;

color: #683535;
font-size: 1.3rem;
`


export const SummaryLanguage = styled.summary`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-size: 15px;
`

export const ButtonMenuLanguage = styled.button`
  background-color: transparent;
  
  cursor: ${(props) => (props.switch ? "" : "pointer")};
 
  border: none;
  padding: 1px 3px;
  color: #fff;
  margin: 10px 5px;
 

  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.switch ? ".3" : "1")};
  

  &:hover{
    color: #ffffff;
    text-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  }             


`

export const ButtonMenu = styled.button`
border: none;
background-color: transparent;
color: #683535;
font-size: 1.3rem;
cursor: pointer;
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-size: 15px;
&:hover{
    color: #bf6c4a;

  }

 @media screen and (max-width: 300px) {
  font-size: 14px;
}
`
