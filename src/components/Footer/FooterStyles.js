import styled from "styled-components";




export const Footer1 = styled.footer`
width: 100%;
height: auto;
background: #333333;
padding: 0 5%;
//padding: 0 10% ;
padding-bottom:5% ;

display: flex;
flex-wrap: wrap;


`

export const FooterBox1 = styled.div`
width: 20%;
//width:25% ;
//height: 200px;
//border: solid 1px black;
display: flex;
justify-content: center;
align-items: center;
min-width: 200px;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 865px) {
 width: 100%;
 margin-top: 0px;




 margin-bottom:30px ;

   
  }
`;

export const LogoFooter = styled.div`
//border-radius: 50%;
//height: 120px;
width: 90%;
height: 50%;

color: white;




`;

export const P = styled.p`
color: white;
@import url('https://fonts.googleapis.com/css2?family=Alef&family=Carattere&family=PT+Sans&display=swap');
font-family: 'Carattere', cursive !important;
font-size: 40px;
margin-bottom: 13px;
text-align: center;
user-select: text;
`
export const P2 = styled.p`
font-size: 11px;
letter-spacing: 2px;
text-align: center;
user-select: text;
`

export const FooterBox2 = styled.div`

width: 20%;
//height: 200px;
//border: solid 1px black;
display: flex;
justify-content: center;
align-items: center;
min-width: 200px;
display: flex;
justify-content: center;
align-items: center;
height:${({hours}) => hours && `auto`};



@media screen and (max-width: 865px) {
 width: 100%;
 margin-top: 0px;
 

 margin-bottom:30px ;

  }

`

export const FooterBox2Container = styled.div`
width: 90%;
//border: solid 1px white;
height: 90%;
margin: auto;


`

export const P3 = styled.p`
text-align: center;
color: white;
margin-top: 20px;
font-size: 20px;
text-transform: uppercase;
letter-spacing: 1.5px;
user-select: text;

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
font-family: 'Cormorant Garamond', serif;
font-family:'Open Sans';




`

export const P4 = styled.p`
color: white;
text-align: center;
margin-top: 20px;
user-select: text;

text-align:${({hours}) => hours && `left`};
font-size:${({hours}) => hours && `13px`};
margin-left: ${({hours}) => hours && `35px`} ;





@media screen and (max-width: 865px) {
  text-align:${({hours}) => hours && `center`};
font-size:${({hours}) => hours && `13px`};
margin-left: ${({hours}) => hours && `0`} ;

   
  }

`

export const P5 = styled.p`
color: white;
text-align: center;
margin-top: 20px;
user-select: text;

text-align:${({hours}) => hours && `left`};
font-size:${({hours}) => hours && `13px`};
margin-left: ${({hours}) => hours && `35px`} ;

&::after {
  color:white;
  content: 'Tel.: 01243 788090';
}



@media screen and (max-width: 865px) {
  text-align:${({hours}) => hours && `center`};
font-size:${({hours}) => hours && `13px`};
margin-left: ${({hours}) => hours && `0`} ;

   
  }

`



export const FooterBox3 = styled.div`
width: 20%;
height: 200px;
//border: solid 1px black;
display: flex;
justify-content: center;
align-items: center;
min-width: 200px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 865px) {
 width: 100%;
 margin-top: 0px;
  
   
  }

`

export const FooterBox4 = styled.div`
width: 20%;
height: 200px;
//border: solid 1px black;
display: flex;
justify-content: center;
align-items: center;
min-width: 200px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
@media screen and (max-width: 865px) {
 width: 100%;
 margin-top: 0px;
 margin-bottom:30px ;
   
  }

`

export const IframeFooter = styled.iframe`

height: 100%;
width: 100%;
border:solid 3px white ;

border-radius:4px ;

`



