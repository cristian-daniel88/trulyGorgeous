import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ArrowsContainer = styled.div`
width: 100%;
height: 90%;
border: solid 1px black;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
`;

export const ArrowsColumn = styled.div`
width: 10%;
height: 100%;
background-color: aqua;
display: flex;
align-items: center;
`

export const ArrowsBox = styled.div`
width: 100%;
height: 10%;
background-color: aquamarine;
margin-top:100px;
position: relative;

`

export const ArrowLeft = styled(FaAngleLeft)`
font-size: 2em;
position: absolute;

transform: ${(props) => (props.hover ? "translateX(280%)" : "translateX(-150%)")};
transition: transform 0.6s ease-in-out;

@media screen and (max-width: 865px) {
display: none;
}
`

export const ArrowRight = styled(FaAngleRight)`
font-size: 2em;
position: absolute;
transform: ${(props) => (props.hover ? "translateX(100%)" : "translateX(500%)")};
transition: transform 0.6s ease-in-out;



@media screen and (max-width: 865px) {
display: none;
}
`






export const ArrowLeftPhone =styled(FaAngleLeft)`
font-size: 2em;
display: none;
color: red;
position: absolute;
left: 10px;
cursor: pointer;
@media screen and (max-width: 865px) {
display: block;

}

`

export const ArrowRightPhone = styled(FaAngleRight)`
font-size: 2em;
display: none;
color: red;
position: absolute;
right: 10px;
cursor: pointer;

@media screen and (max-width: 865px) {
display: block;
}
`

