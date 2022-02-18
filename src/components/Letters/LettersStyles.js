import styled from "styled-components";

export const LettersContainer = styled.div`
width: 45%;
height: 35%;
background-color: #0000003d;
border-radius: 20px;
padding: 30px;
backdrop-filter: blur(20px);
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

animation: taadaa2   1s cubic-bezier(.92,.29,.65,.59) 1;

`;

export const TitleContainer = styled.div`
width: 100%;
height: 65%;
//border: solid 1px black;
display: flex;
justify-content: center;
align-content: center;


`

export const TitleH2 = styled.h2`
color: white;


`


export const ButtonContainer = styled.div`
width: 100%;
height: 35%;
//border: solid 1px black;
display: flex;
justify-content: center;
align-content: center;

`

export const Button = styled.button`
background: transparent;
border: none;
color: white;


`
