import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ArrowsContainer = styled.div`
width: 100%;
height: 80%;
//border: solid 1px black;
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
overflow-x: hidden;
overflow-y: hidden;



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

@media screen and (max-width: 865px) {
margin-top: 70px;

}


`

export const ArrowsBoxR = styled.div`
width: 100%;
height: 10%;
//background-color: aquamarine;
margin-top:300px;
position: relative;
display: flex;
justify-content: end;

@media screen and (max-width: 865px) {
margin-top: 70px;

}


`

export const ArrowLeft = styled(FaAngleLeft)`
font-size: 3em;
position: absolute;
transform: ${(props) => (props.hover == 'true' ? "translateX(80%)" : "translateX(-100%)")};
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
transform: ${(props) => (props.hover == 'true' ? "translateX(-80%)" : "translateX(100%)")}; 
transition: transform 0.6s ease-in-out; 
cursor: pointer;

@media screen and (max-width: 865px) {
display: none;
}
`






export const ArrowLeftPhone =styled(FaAngleLeft)`
font-size: 3em;
display: none;
color: #a28989;
position: absolute;
left: 10px;
top: 100px;
cursor: pointer;
@media screen and (max-width: 865px) {
display: block;

}

`

export const ArrowRightPhone = styled(FaAngleRight)`
font-size: 3em;
display: none;
color: #a28989;
position: absolute;
right: 10px;
top: 100px;
cursor: pointer;

@media screen and (max-width: 865px) {
display: block;
}
`




