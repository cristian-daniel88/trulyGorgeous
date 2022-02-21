import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

export const LettersContainer = styled.div`
width: 45%;
height: auto;
background-color: #0000003d;
border-radius: 20px;
padding: 30px;
backdrop-filter: blur(1px);
position: absolute;
top: 40%;
left: 10%;
opacity: 1;


@keyframes taadaa2 { 
    0% {
        left: 0%;
        opacity: 0;
    }
    
    100% {
        left: 10%;
    }    
}

animation: taadaa2   0.7s cubic-bezier(.92,.29,.65,.59) 1;


@media screen and (max-width: 865px) { 
    width: 80%;
    padding: 10px;
    margin-top: 50px;
    top: 50%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
`;

export const TitleContainer = styled.div`
width: 100%;

//border: solid 1px black;
display: flex;

align-content: center;


`

export const SubTitleContainer = styled.div`
width: 100%;
display: flex;
`

export const Subtitle = styled.h2`
font-size: 2em;
color: white;

@media screen and (max-width: 865px) { 
    font-size: 1em;
}


`

export const TitleH1 = styled.h1`
color: white;
font-size: 4.5em;

@media screen and (max-width: 865px) { 
    font-size: 1.5em;
}


`


export const ButtonContainer = styled.div`
width: 100%;
margin-top: 10px;
//border: solid 1px black;
display: flex;
justify-content: start;
align-content: center;


`

export const Button1 = styled.button`
background: transparent;
border: none;
border-radius: 5px;
background-color: #fbfeff;
color: #a59797;
cursor: pointer;
z-index: 200;
padding: 0 5px;
letter-spacing: -1px;

font-family: 'Raleway',Helvetica,Arial,Lucida,sans-serif;
font-weight: bold;
font-style: normal;
text-transform: uppercase;


&:hover {

}


`


export const ATelephon = styled.a`
background: transparent;
border: none;
border-radius: 5px;
border: solid 3px #b2b2b2;
background-color: silver;
color: white;
cursor: pointer;
z-index: 200;
padding: 2px 5px;

display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Raleway',Helvetica,Arial,Lucida,sans-serif;
font-weight: bold;
font-style: normal;
text-transform: uppercase;



&:hover {

}


`

export const PhoneContainer = styled.div`
border-radius: 50%;
background-color:#7e9bb2;

width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;


`

export const Phone = styled(FaPhone)`
color: #a59797;
font-size: 20px;

color: white;




`
