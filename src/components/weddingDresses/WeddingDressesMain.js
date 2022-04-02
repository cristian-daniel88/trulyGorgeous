import React from "react";
import { LinkA } from "../Nav/NavStyles";
import {
  DesignersCardContainer,
  DesignersContainer,
  DesignersMainCard,
  DesignersMainContainer,
  DesignersPhoneDiv,
  NameDesigner,
  TitleBrand,
} from "../Designers/DesignersStyles";

function WeddingDressesMain() {
  return (
    <DesignersContainer
      style={{
        backgroundImage: `url('./assets/backgroundA.jpg')`,
        fontSize: "center",
        //'backgroundRepeat':'no-repeat',
        //'backgroundSize':'cover'
      }}
    >
      <NameDesigner
        style={{
          color: "rgb(115 112 137)",
          'marginTop':'50px'
        }}
      >
        Wedding Dresses
      </NameDesigner>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>
      <DesignersMainContainer style={{ marginTop: "100px" }} designer="true">
        <DesignersCardContainer>
          <LinkA to={"/fairytale"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Fairytale</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/romantic"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Romantic</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>

        <DesignersCardContainer>
          <LinkA to={"/sophisticated"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Sophisticated</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/elegant"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Elegant</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>
      </DesignersMainContainer>





      <DesignersPhoneDiv designer="true">
        <LinkA to={"/fairytale"} style={{ marginTop: "50px" }}>
          <DesignersMainCard>
            <TitleBrand>
              <p className="brandTitle">Fairytale</p>
            </TitleBrand>
          </DesignersMainCard>
        </LinkA>

        <LinkA to={"/romantic"}>
          <DesignersMainCard>
            <TitleBrand>
              <p className="brandTitle">Romantic</p>
            </TitleBrand>
          </DesignersMainCard>
        </LinkA>

        <LinkA to={"/sophisticated"}>
          <DesignersMainCard>
            <TitleBrand>
              <p className="brandTitle">Sophisticated</p>
            </TitleBrand>
          </DesignersMainCard>
        </LinkA>

    

        <LinkA to={"/elegant"}>
          <DesignersMainCard>
            <TitleBrand>
              <p className="brandTitle">Elegant</p>
            </TitleBrand>
          </DesignersMainCard>
        </LinkA>

   
      </DesignersPhoneDiv>


    </DesignersContainer>
  );
}

export default WeddingDressesMain;
