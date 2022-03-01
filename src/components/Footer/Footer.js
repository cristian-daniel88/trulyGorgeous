import React from 'react'
import { Footer1, FooterBox1, FooterBox2, FooterBox3, FooterBox4, LogoFooter, P, P2 , FooterBox2Container, P3, P4} from './FooterStyles'

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
                  <P3>
                    Address
                  </P3>
                  <P4>
                  Truly Gorgeous Unit 4 (South) Vinnetrow Business Park Vinnetrow Road Chichester – West Sussex PO20 1QH
                  </P4>
              </FooterBox2Container>
        </FooterBox2>

        <FooterBox3>
              <FooterBox2Container>
              <P3>
                    Contact Us
              </P3>
              <P4>
                  Tel.: 01243 788090
              </P4>
              <P4>
              mail@trulygorgeous.co.uk
              </P4>
              </FooterBox2Container>
        </FooterBox3>

        <FooterBox4>
              <FooterBox2Container>
                
              </FooterBox2Container>
        </FooterBox4>

    </Footer1>
  )
}

export default Footer