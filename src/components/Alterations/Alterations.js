import React from "react";
import { LinkA } from "../Nav/NavStyles";
import {
  DesignersCardContainer,
  DesignersContainer,
  DesignersMainCard,

  DesignersMainContainer,
  NameDesigner,
  TitleBrand,
} from "../Designers/DesignersStyles";

function Alterations() {
  return (
    <DesignersContainer
      style={{
        backgroundImage: `url('./assets/alterations2.jpg')`,
         backgroundPosition: "center",
        'backgroundRepeat':'no-repeat',
        'backgroundSize':'cover',
         height: '100vh',
         
       
      }}
    >
      <NameDesigner
        style={{
          color: "rgb(115 112 137)",
        }}

        alterationsMargin='true'
      > 
      Alterations
      
      </NameDesigner>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>


      <DesignersCardContainer style={{
        'display':'flex',
        'justifyContent':'center',
        'alignItems':'center',
        'height':'70%'
      }}>
          <LinkA to={"/price-list"} >
            <DesignersMainCard alterations='true'>
              <TitleBrand>
                <p className="brandTitle">Price List</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA to="/our-creations">
          <DesignersMainCard alterations='true'>
              <TitleBrand>
                <p className="brandTitle">Our Creations</p>
              </TitleBrand>
          </DesignersMainCard>
          </LinkA>

        </DesignersCardContainer>




    </DesignersContainer>
  );
}

export default Alterations;
