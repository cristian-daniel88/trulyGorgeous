import styled from "styled-components";


export const LoadingContainer = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 498;
display: ${({toggle}) => toggle == 'true' ? 'flex' : 'none'};
justify-content: center;
align-items: center;
background: white;
`


