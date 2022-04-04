import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ContainerContact,
  Form,
} from "../ContactContainer/ContactContainerStyles";

function SendMessage() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
        history.push("/contact");
      }, 3300);
    return () => {
    
    }
  }, [])
  


  return (
    <ContainerContact
      style={{ height: "80vh", display: "flex", alignItems: "center", 'justifyContent':'center' }}
    >
      <Form
        style={{
          height: "100px",
          justifyContent: "center",
          backgroundColor: "#bffbd7",
          width:'80%',
        }}
      >
        <p style={{ textAlign: "center" }}>
          Your request has been sent! Our team will be in contact with you soon.
        </p>
      </Form>
    </ContainerContact>
  );
}

export default SendMessage;
