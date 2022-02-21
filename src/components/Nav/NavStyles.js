import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";




export const Header = styled.header`
width: 100%;
height: auto;
padding: 10px 5%;
position: fixed;
background-color: white;
z-index: 50;

font-family: 'FuturaStd', sans-serif ;
font-weight: 200;
letter-spacing: 1.5px;
color: #6f3333;


@media screen and (max-width: 865px) {
   display: flex;
   justify-content: space-between;
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
    width: 100%;
    background-size: contain ;
    background-position: center;
  }

  @media screen and (max-width: 600px) {
    width: 240px;
  }




`;

export const H1Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`



export const Designer = styled.p`
font-size: 100%;
font-weight: 300;
letter-spacing: 5px;
color: #a59797;

@media screen and (max-width: 600px) {
    font-size: 9px;
    font-weight: bold;
  }

`



export const Navegador = styled.nav`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 1300px) {
    justify-content: end;
    width: auto;
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
position: relative;
text-transform: uppercase;
font-weight: bolder;
font-size: 12px;

color: black;
cursor: pointer;
&:hover {
    color: #bf6c4a;

}
&:focus {
  color: #bf6c4a;
}

`

export const MenuBurguer = styled(FaBars)`
display: none;
@media screen and (max-width: 865px) {
    display: block;
    //font-size: 30px;
    font-size: 1.5em;
    margin-top: 20px;
    
    cursor: pointer;
    color:#704949;
  }

  @media screen and (max-width: 300px) {
   margin-top: 65px;
   width: 20px;
  }


`

export const ContainerLogoAndH2 = styled.div`
margin-bottom: 10px;

`

export const LinkA = styled(Link)`
text-decoration: none;

font-size: 12px;
color: black;


&:hover {
    color: #bf6c4a;

}
&:focus {
  color: #bf6c4a;
}


`

export const LinkAHome = styled(Link)`
text-decoration: none;
color: black;
color: ${(props)=> props.focuss == 'true'  ? '#bf6c4a' : 'black' };


&:hover {
    color: #bf6c4a;

}
&:focus {

  color:  #bf6c4a;
}
`
export const PopUpAlterations = styled.div`
width: 120px;
height: 300px;
position: absolute;
background-color: azure;


`

export const UlAlterations = styled.ul`


`

export const LiAlterations = styled.li`
list-style: none;

`

export const PopUpWeddingDresses = styled.div`
width: 120px;
height: 300px;
position: absolute;
background-color: azure;
left: 50px;

`


export const UlWeddingDresses = styled.ul`


`

export const LiWeddingDresses = styled.li`
list-style: none;

`


export const PopUpAboutUs = styled.div`
width: 120px;
height: 300px;
position: absolute;
background-color: azure;
display: ${(props)=> props.popUp == 'true' ? 'block' : 'none'};
`
export const PopUpUl = styled.ul`

`

export const PopUpLi = styled.li`
list-style: none;

`