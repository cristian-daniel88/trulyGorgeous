import React from "react";
import { NameDesigner } from "../Designers/DesignersStyles";
import { ContainerLogoAndH2, Designer, H1Container, LinkA, Logo, LogoContainer } from "../Nav/NavStyles";
import {
  Price,
  PriceDetails,
  PriceLetter,
  PriceListBox,
  PriceListBoxContainer,
  PriceListBoxSubTitle,
  PriceListBoxTitle,
  PriceListContainer,
  PriceP,
} from "./PriceListStyles";

function PriceList() {
  return (
    <PriceListContainer>
      <NameDesigner style={{ marginBottom: "20px", marginTop: "30px"  ,userSelect: 'text'}}>
        Price List
      </NameDesigner>






      <PriceListBox>

        
      <ContainerLogoAndH2 style={{
        'marginBottom':'40px',
        'zIndex':'0'
      }}>
       
          <LogoContainer>
            <Logo style={{'width':'50%','marginBottom':'10px'}}/>
          </LogoContainer>
       

        <H1Container >
          <Designer style={{'userSelect':'text'}}>DESIGNER & BESPOKE BRIDAL WEAR</Designer>
        </H1Container>
      </ContainerLogoAndH2>


        <PriceListBoxTitle>Wedding</PriceListBoxTitle>

        <PriceListBoxContainer
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <PriceListBoxSubTitle>Service</PriceListBoxSubTitle>

          <PriceListBoxSubTitle>Price Form</PriceListBoxSubTitle>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Length Shortening plain fabric (satin/mikado/tulle etc).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£150</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Length shortening lace fabric (lace with scallop).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£190</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Train cut (plain).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£90</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Train cut (lace).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£150</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Side seams.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£80</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Shoulders.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£45</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Straps.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£35</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Sleeves take in.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£45</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Sleeves added.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£80</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Bustle back (single).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£25</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Corset to add (lace up).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£150</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Corset boning.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£120</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Dress size down (detailed).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£200</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
            Dress size down (plain).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£130</Price>
        </PriceListBoxContainer>










        <PriceListBoxTitle style={{ marginTop: "30px" }}>
          Bridesmaid/Prom/Mother of the Bride
        </PriceListBoxTitle>

        <PriceListBoxContainer
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <PriceListBoxSubTitle>Service</PriceListBoxSubTitle>

          <PriceListBoxSubTitle>Price Form</PriceListBoxSubTitle>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Length shortening (satin/taffeta/chiffon). 
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£65</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Length shortening (jersey/lace).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£80</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Side seams.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£35</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Shoulders.

          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£25</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Straps.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£15</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Corset to add (lace up).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£70</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Dress size Down
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£80</Price>
        </PriceListBoxContainer>



        <PriceListBoxTitle>Extras</PriceListBoxTitle>

        <PriceListBoxContainer
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <PriceListBoxSubTitle>Service</PriceListBoxSubTitle>

          <PriceListBoxSubTitle>Price Form</PriceListBoxSubTitle>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Bra cups to add (including cups). 
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£20</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Crystal bead/sequins applique to add (plus cost of applique).

          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£20 each</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Redesign of dress £35.
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£35 per hour</Price>
        </PriceListBoxContainer>

        <PriceListBoxContainer>
          <PriceDetails style={{ textDecoration: "none" }}>
          Preliminary fitting (30 minutes).
          </PriceDetails>

          <Price style={{ textDecoration: "none" }}>£15</Price>
        </PriceListBoxContainer>



        <PriceLetter>

            <PriceP>Unit 4 Vinnetrow Business Park </PriceP><br/>

            <PriceP>Vinnetrow Road, Chichester, PO20 1QH</PriceP><br/>
            

            <PriceP>Tel: 01243 788090 sales@trulygorgeous.co.uk </PriceP><br/>
            

            <PriceP>WWW.TRULYGORGEOUS.CO.UK</PriceP>        
            
        </PriceLetter>

    
      </PriceListBox>
    </PriceListContainer>
  );
}

export default PriceList;
