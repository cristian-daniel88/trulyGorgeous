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
} from "./DesignersStyles";

function DesignersMain() {
  return (
    <>
    <DesignersContainer
      style={{
        "background-image": "url('./assets/backgroundA.jpg')",
        'height':'auto'
        //"backgroundRepeat":"no-repeat",
        //"backgroundPosition":"center",
        //"backgroundSize":"cover"
      }}
      >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>
      <NameDesigner
        style={{
          color: "rgb(115 112 137)",
          'marginTop':'50px'
        }}
        >
        Designers
      </NameDesigner>
      <DesignersMainContainer designer='true'>
        <DesignersCardContainer >
          <LinkA to={"/paloma-blanca"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Paloma Blanca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/ronald-joyce"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Ronald Joyce</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>

        <DesignersCardContainer designer='true'>
          <LinkA to={"/victoria-jane"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Victoria Jane</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
              
            <a href={"https://dianelegrandbridal.com/"} target="_blank">
          <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Diane Legrand</p>
              </TitleBrand>
          </DesignersMainCard>
            </a>
            
        </DesignersCardContainer>

        <DesignersCardContainer designer='true'>
          <LinkA to={"/alan-hannah"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Alan Hannah</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/lusan-mandongus"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Lusan Mandongus</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>

        <DesignersCardContainer
          style={{ justifyContent: "left" }}
          bottom="true"
          designer='true'
          >
          <LinkA to={"/sofia-bianca"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Sofia Bianca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>
      </DesignersMainContainer>







       
    <DesignersPhoneDiv designer='true'>
    
          <LinkA to={"/paloma-blanca"} style={{'marginTop':'50px'}}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Paloma Blanca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/ronald-joyce"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Ronald Joyce</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/victoria-jane"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Victoria Jane</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>


          <a href={"https://dianelegrandbridal.com/"} target="_blank">
          <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Diane Legrand</p>
              </TitleBrand>
          </DesignersMainCard>
            </a>

          <LinkA to={"/alan-hannah"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Alan Hannah</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/sofia-bianca"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Sofia Bianca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to={"/lusan-mandongus"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Lusan Mandongus</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        
    </DesignersPhoneDiv>
    </DesignersContainer>








   
    </>
  );
}

export default DesignersMain;
