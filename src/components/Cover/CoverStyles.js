import styled from "styled-components";

export const CoverContainer = styled.div`
height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0,.7);
position: fixed;
z-index: 499;
display: none;

@media screen and (max-width: 865px) {
    display: ${({toggle}) => toggle == 'true' ? 'block' : 'none'};
  
  
   
  }

`