import React from "react";

import {
  Footer1,
  FooterBox1,
  FooterBox2,
  FooterBox3,
  FooterBox4,
  LogoFooter,
  P,
  P2,
  FooterBox2Container,
  P3,
  P4,
  IframeFooter,
  FooterPrim,
  P5,
} from "./FooterStyles";

function Footer() {
  return (
    <Footer1>
      <FooterBox1>
        <LogoFooter>
          <P>Truly Gorgeous</P>
          <P2>DESIGNER & BESPOKE BRIDAL WEAR</P2>
        </LogoFooter>
      </FooterBox1>

      <FooterBox2>
        <FooterBox2Container>
          <P3>Address</P3>
          <P4>
            Truly Gorgeous <br /> Unit 4 Vinnetrow Business Park Vinnetrow Road
            Chichester <br /> West Sussex PO20 1QH
          </P4>
        </FooterBox2Container>
      </FooterBox2>

      <FooterBox2 hours='true'>
        <FooterBox2Container>
          <P3>Opening Hours</P3>
          <P4 hours='true'>
            <div style={{'userSelect':'text'}}>Monday: 10am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Tuesday: 10am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Wednesday: 10am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Thursday: 10am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Friday: 10am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Saturday: 9am to 5pm</div><br/>
            <div style={{'userSelect':'text'}}>Sunday: Closed</div>
          </P4>
        </FooterBox2Container>
      </FooterBox2>

      <FooterBox3>
        <FooterBox2Container>
          <P3>Contact Us</P3>
          {/* <P4 style={{'color':'white'}}>Tel.:&nbsp;<span style={{'color':'white'}}>01243 788090</span></P4> */}
          <P5></P5>
          
          <P4>mail@trulygorgeous.co.uk</P4>
        </FooterBox2Container>
      </FooterBox3>

      <FooterBox4>
        <FooterBox2Container>
          <IframeFooter
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10081.628828875313!2d-0.7505814!3d50.8236209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf93b380bcdb6e6e!2sTruly%20Gorgeous%20Wedding%20Dresses!5e0!3m2!1sen-419!2suk!4v1645437678011!5m2!1sen-419!2suk"
            allowFullScreen=""
            loading="lazy"
          ></IframeFooter>
        </FooterBox2Container>
      </FooterBox4>
    </Footer1>
  );
}

export default Footer;
