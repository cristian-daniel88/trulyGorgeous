import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ArrowsContainer = styled.div`
width: 100%;
height: 90%;
//border: solid 1px black;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
overflow-x: hidden;
`;

export const ArrowsColumnLeft = styled.div`
width: 10%;
height: 100%;
//background-color: aqua;
display: flex;
align-items: center;
align-content: center;
`

export const ArrowsColumnRight = styled.div`
width: 10%;
height: 100%;
//background-color: aqua;
display: flex;
align-items: center;
align-content:center;
`

export const ArrowsBoxL = styled.div`
width: 100%;
height: 10%;
//background-color: aquamarine;
margin-top:300px;
position: relative;
display: flex;
justify-content: start;


`

export const ArrowsBoxR = styled.div`
width: 100%;
height: 10%;
//background-color: aquamarine;
margin-top:300px;
position: relative;
display: flex;
justify-content: end;


`

export const ArrowLeft = styled(FaAngleLeft)`
font-size: 3em;
position: absolute;
transform: ${(props) => (props.hover == 'true' ? "translateX(350%)" : "translateX(-100%)")};
transition: transform 0.6s ease-in-out;
cursor: pointer;
color: silver;



@media screen and (max-width: 865px) {
display: none;
}
`

export const ArrowRight = styled(FaAngleRight)`
font-size: 3em;
position: absolute;
color: silver;
transform: ${(props) => (props.hover == 'true' ? "translateX(-355%)" : "translateX(100%)")}; 
transition: transform 0.6s ease-in-out; 
cursor: pointer;

@media screen and (max-width: 865px) {
display: none;
}
`






export const ArrowLeftPhone =styled(FaAngleLeft)`
font-size: 2em;
display: none;
color: silver;
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
color: silver;
position: absolute;
right: 10px;
cursor: pointer;

@media screen and (max-width: 865px) {
display: block;
}
`



