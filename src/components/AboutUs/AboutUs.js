import React from "react";
import { LinkA } from "../Nav/NavStyles";
import {
  AlterationsContainer,
  BoxAlterations,
} from "../Alterations/AlterationsStyles";

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: `url('./assets/background1.jpg')`,

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",

        height:"auto" 
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>


      <AlterationsContainer style={{"height":'80vh'}}>
       
        <LinkA href={"/our-boutique"}>
          <BoxAlterations style={{'width':"250px", "marginBottom":'20px', "marginTop":'20px'}}>Our Boutique</BoxAlterations>
        </LinkA>

        <LinkA href={"/our-brides"}>
          <BoxAlterations style={{'width':"250px", "marginBottom":'20px'}}>Our Brides</BoxAlterations>
        </LinkA>
{/* 
        <LinkA href={"/testimonials"}>
          <BoxAlterations style={{'width':"250px", "marginBottom":'20px'}}>Testimonials</BoxAlterations>
        </LinkA> */}
      </AlterationsContainer>
    </div>
  );
}

export default AboutUs;
