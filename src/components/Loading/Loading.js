import React from "react";
import { LoadingContainer} from "./LoadingStyles";


function Loading({ toggle }) {
  return (
    <LoadingContainer toggle={toggle}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
}

export default Loading;
