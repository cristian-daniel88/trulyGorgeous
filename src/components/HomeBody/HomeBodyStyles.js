import styled from "styled-components";

export const BodyHome = styled.section`
width: 100%;
height: 90vh;
padding: 0% 0%;
padding-bottom: 12%;
background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;
background-position-y: 10px;


@keyframes taadaa { 
    0% {
      opacity: 0.1;
    }
  
    100% {
      opacity: 1;
    }
  }

  //animation: taadaa 6s cubic-bezier(.92,.29,.65,.59) 1;

  animation: ${(props) => (props.image ? `taadaa 2s cubic-bezier(.92,.29,.65,.59) 1` : "")};

  
  

`