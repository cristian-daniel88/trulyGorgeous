import React from "react";
import {
  AInstagram,
  IconFaceBook,
  IconInstagram,
  IconPhone,
  TelophoneNumber,
} from "../Nav/NavStyles";
import { ContactFooterContainer, CristianHerreraDev, CristianHerreraDev2, PContactFooter } from "./ContactFooterStyles";

function ContactFooter() {
  return (
    <ContactFooterContainer>
      <a
        style={{
          cursor: "pointer",
          zIndex: "0",
          color: "#3B5998",
          border: "none",
        }}
        href="https://www.facebook.com/trulygorgeousweddingdresses"
        target="_blank"
      >
        <PContactFooter>
          <IconFaceBook
            style={{
              background: "white",
              borderRadius: "50%",
              marginLeft: "20px",
              zIndex: "0",
              marginBottom: "15px",
            }}
          ></IconFaceBook>
          <p style={{ color: "#ffffff", 'marginLeft':'5px', 'fontFamily':`'Raleway',sans-serif`, 'fontWeight':'600','letterSpacing':'2px', 'fontSize':'10px', 'lineHeight':'25px'}}>facebook.com/trulygorgeousweddingdresses</p>
        </PContactFooter>
      </a>

    <div style={{'width':'280px'}}>

      <AInstagram
        style={{
          cursor: "pointer",
          zIndex: "0",
          marginLeft: "20px",
          marginBottom: "15px",
        }}
        href="https://www.instagram.com/trulygorgeousbridal"
        target="_blank"
        >
        <PContactFooter>
          <IconInstagram />

          <p style={{ color: "#ffffff", 'marginLeft':'5px', 'fontFamily':`'Raleway',sans-serif`, 'fontWeight':'600','letterSpacing':'2px' , 'fontSize':'10px'}}>instagram.com/trulygorgeousbridal</p>
        </PContactFooter>
      </AInstagram>
      </div>

      <div >

      <a
        style={{
            cursor: "pointer",
            zIndex: "1000000",
            display: "flex",
            color: "#484040",
            marginLeft: "20px",
            marginRight: "20px",
            
        }}
        href="tel:01243788090"
        target="_blank"
        >
        <IconPhone style={{ color: "white" }}></IconPhone> &nbsp;
        <TelophoneNumber style={{ color: "white" , 'fontSize':'10px', 'letterSpacing':'2px'}}>
          01243788090
        </TelophoneNumber>
      </a>

    </div>
      <CristianHerreraDev href="https://cristianherreradev.co.uk" target='_blank'>
          Designed by cristianherreradev.co.uk
      </CristianHerreraDev>

    
      
      <CristianHerreraDev2 href="https://cristianherreradev.co.uk" target='_blank'>
          Designed by cristianherreradev.co.uk
      </CristianHerreraDev2>
        
    </ContactFooterContainer>
  );
}

export default ContactFooter;
