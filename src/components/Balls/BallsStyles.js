import styled from "styled-components";


export const BallsContainer = styled.div`
width: 100%;
height: 10%;
//border: solid 1px black;
display: flex;
justify-content: center;
position: absolute;
bottom: 0;


`

export const Bola = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: rgb(108 50 79 / 0.3);
margin: 10px;
z-index: 400;
background-color: ${(props) => (props.bolaColor )};
;

`