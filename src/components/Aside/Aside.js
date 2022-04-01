import React from "react";

import { AsideContainer, DetailsAside } from "./AsideStyles";

function Aside() {
  return (
    <AsideContainer>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Alef&family=PT+Sans&family=Raleway:ital@1&display=swap');
      </style>
      <DetailsAside>
        “Truly Gorgeous is where brides can find beautiful dresses with a
        personalised customising alteration service, in house, making your dress
        completely unique” <br/><br/>
      Our dresses range from £300 to £2500 with average dress at £1500
      </DetailsAside>
    </AsideContainer>
  );
}

export default Aside;
