import styled , {css} from "styled-components";
import { FaBars, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Header = styled.header`
width: 100%;
height: auto;
padding: 10px 5%;
position: fixed;
background-color: white;
z-index: 2000;

font-family: 'FuturaStd', sans-serif ;
font-weight: 200;
letter-spacing: 1.5px;
color: #6f3333;
border-bottom: solid 1px #e8d8d8;


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
width: 300px;
height: 70px;
background-size: contain ;
background-repeat: no-repeat;
cursor: pointer;
margin-top: 10px;

@media screen and (max-width: 1300px) {
    width: 240px;
    background-size: contain ;
    background-position: center;
  }

  @media screen and (max-width: 600px) {
    width: 240px;
  }




`;

export const H1Container = styled.h1`
width: 100%;
display: flex;
justify-content: center;
font-size: 16px;
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
margin-right: 30px;
@media screen and (max-width: 865px) {
    display: none;
  }
  
  
  `

export const Li = styled.li`
list-style: none;
padding-top: 10px;
margin-left: 20px;
position: relative;


//background-color: green;
//width: 150px;
text-align: center;
text-transform: uppercase;
font-weight: bolder;
font-size: 13px;
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-weight: 500;
color: #494261b5;
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
position: relative;
z-index: 500;
width: 100%;

`

export const LinkA = styled(Link)`
text-decoration: none;
color:  #494261b5 !important;



&:visited {
  color: #494261b5;
}


&:hover {
    color: #bf6c4a;

}
&:focus {
  
}


`

export const LinkAHome = styled(Link)`
text-decoration: none;
color: ${(props)=> props.focuss == 'true'  ? '#bf6c4a' : '#494261b5' };

&:hover {
    color: #bf6c4a;

}
&:focus {

  color:  #bf6c4a;
}
`




export const PopUp = styled.div`
width: 120px;
position: absolute;
//height: 100px;
display: ${(props) => props.popUp == 'true' && 'block'};
background-color: white;

border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
${({popUp})=> popUp == 'false' && css`
height: 0;
opacity: 0;
@keyframes taadaa3 { 
    0% {
        
     
      height: auto;
      
      
    }
    
    
    100% {
      
    }    
}

animation: ${(props) => props.popUp == 'false' && 'taadaa3 1s cubic-bezier(.92,.29,.65,.59) 1'};

` }

${({popUp})=> popUp == 'true' && css`
border-bottom: solid 1px #e8d8d8;
border-left: solid 1px #e8d8d8;
border-right: solid 1px #e8d8d8;
height: auto;
@keyframes taadaa3 { 
    0% {
        
      
      height: 0;
    
    }
    
    100% {
     
    }    
}

animation: ${(props) => props.popUp == 'true' && 'taadaa3   1s cubic-bezier(.92,.29,.65,.59) 1'};

` }



`
export const PopUpUl = styled.ul`
display: ${({popUp})=> popUp == 'true' ? 'block' : 'none'};
margin-top: 20px;

`

export const PopUpLi = styled.button`
display: block;
background: transparent;
border: none;
width: 100%;
list-style: none;

text-align: left;
padding-left: 4px;
color: black;
border-bottom: solid 1px #dfd4cb;
margin-bottom: 15px;
transition: color 2s;
transition: border-bottom 2s;

text-transform: uppercase;
font-weight: bolder;
font-size: 12px;
cursor: pointer;
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-weight: 500;
letter-spacing: 1.5px;
color: #494261b5;


&:hover {
  color: #bf6c4a;
  border-bottom: solid 1px #bf6c4a;
}


`


export const BoxContact = styled.div`
width: 250px;
height: 20px;
position: absolute;
//background-color: green;
top: 10px;
right: 20px;
display: flex;
justify-content: space-around;
color: black;


@media screen and (max-width: 865px) {
    display: none;
    
  }

`

export const IconFaceBook =  styled(FaFacebook)`
font-size: 1.5em;
cursor: pointer;
z-index: 500000;

`
export const IconInstagram = styled(FaInstagram)`
font-size: 1.5em;
cursor: pointer;
z-index: 500000;

`

export const IconPhone = styled(FaPhone)`
font-size: 1.5em;
cursor: pointer;
z-index: 500000;
`

export const AInstagram = styled.a`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  border-radius: 5px;
  color: #fff;

  line-height: 1.5em;
  vertical-align: middle;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  display: flex;
  align-items: center;
`
export const TelophoneNumber = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Alef&family=Raleway:ital@1&display=swap');
font-weight: 600;
margin-top: 5px;
font-family: 'Alef', sans-serif;
font-family: 'Raleway', sans-serif;
`

export const TelephoneNumber2 = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Alef&family=Raleway:ital@1&display=swap');
font-weight: 600;
font-family: 'Alef', sans-serif;
font-family: 'Raleway', sans-serif;
display: none;
position: absolute;

z-index: 60000;
top: 1;
font-size: 14px;
color: black;


@media screen and (max-width: 865px) {
 display: flex;

   
  }

`