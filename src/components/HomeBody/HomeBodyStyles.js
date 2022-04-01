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
//opacity: ${({image})=> image == './assets/banner2.jpg' ? '.2' : '' };
overflow-x: hidden;
opacity: ${(props)=> props.op};

display: ${({toggle})=> toggle == 'true' ? 'none' : 'block'};
 



@keyframes taadaa { 
    0% {
      opacity: 0.2;
    }
  
    100% {
      opacity: 1;
    }
  }

  //animation: taadaa 6s cubic-bezier(.92,.29,.65,.59) 1;

  animation: ${(props) => (props.image ? `taadaa 1s cubic-bezier(.92,.29,.65,.59) 1` : "")};



  @media screen and (max-width: 865px) {
   
 
    background-image:${({indx}) => indx == 1 && "url(./assets/banner1bis.jpg)"};
    background-image:${({indx}) => indx == 2 && "url(./assets/banner2bis.jpg)"};
    background-image:${({indx}) => indx == 3 && "url(./assets/banner3bis.jpg)"};
    
  
   
  }

  

  


  
  

`