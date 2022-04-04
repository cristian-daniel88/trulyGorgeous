import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AdressContainer, BoldContact, BookingApoiment, ContactBoxes1, ContactBoxes2, ContactDetails, ContactDetailsContainer, ContactForm, ContainerBoxesContact, ContainerContact, DoneContainer, Form, IframeBox, IframeBoxContainer, Input, Label, OpeningHoursDiv, PContact, PhoneContainer, Send, SentContainer, SentDiv, TextArea } from "./ContactContainerStyles";
var axios = require("axios");



function ContactContainer () {
  const history = useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [appointmentDate, setAppoimentDate] = useState("");
  const [details, setDetails] = useState("");

  const [validateEmail, setValidateEmail] = useState("");
  const [validatePhone, setValidatePhone] = useState("");

 

    const sendEmail = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return setValidateEmail("invalid");
    }

    if (isNaN(phone) || phone === "") {
      setValidatePhone("no number");
      return;
    }

  

  
     

   

  
    var data = {
      name: name,
      email: email,
      phone: phone,
      weddingDate: weddingDate,
      appointmentDate: appointmentDate,
      details: details,
    };

    var config = {
      method: "post",
      url: "https://sendemailtrulygorgeous.herokuapp.com/api/emails",
      //url:"http://localhost:8080/api/emails",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        history.push('/sent')
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      
      setValidateEmail("");
      setValidatePhone("");

    
    return;
  };
  return (
    <>
    <ContainerContact>

      
   
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BookingApoiment>
              {" "}
              <BoldContact style={{ fontSize: "22px" }}>
                Book an Appointment at Truly Gorgeous
              </BoldContact>{" "}
              <br /> 
              {/* To arrange your appointment with us.  */}
              In our boutique we
              offer only one bride a time. Please use the booking form below or
              call us.
            </BookingApoiment>
          </div>
          <ContainerBoxesContact>
            <ContactBoxes1>
    
              <ContactForm>
                <Form>
                  <Label>Your Name</Label>
                  <Input
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />

                  <Label>
                    Email Address{" "}
                    <span style={{ color: "red" }}>{validateEmail}</span>
                  </Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    onClick={() => {
                      setValidateEmail("");
                    }}
                  />

                  <Label>
                    Phone <span style={{ color: "red" }}>{validatePhone}</span>
                  </Label>
                  <Input
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    type={"tel"}
                    onClick={() => {
                      setValidatePhone("");
                    }}
                  />

                  <Label>Wedding Date</Label>
                  <Input
                    name="weddingDate"
                    onChange={(e) => setWeddingDate(e.target.value)}
                    value={weddingDate}
                    type="date"
                  />

                  <Label>Requested Appointment Date</Label>
                  <Label style={{ fontSize: "10px" }}>
                    Please await confirmation from the team at Truly Gorgeous
                  </Label>
                  <Input
                    name="appointmentDate"
                    onChange={(e) => setAppoimentDate(e.target.value)}
                    value={appointmentDate}
                    type="date"
                  />

                  <Label>Details</Label>
                  <TextArea
                    placeholder="write here"
                    name="details"
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                  ></TextArea>

                  <Send type="submit" onClick={sendEmail}>
                    Send
                  </Send>
                </Form>
              </ContactForm>
            </ContactBoxes1>

            <ContactBoxes2>
              <ContactDetails>
                <ContactDetailsContainer>
                  <PhoneContainer>
                    <PContact>
                      <BoldContact>Phone: </BoldContact>01243 788090
                    </PContact>
                    <PContact>
                      <BoldContact>Email: </BoldContact>mail@trulygorgeous.co.uk
                    </PContact>
                  </PhoneContainer>

                  <AdressContainer>
                    <PContact>
                      <BoldContact>Address: </BoldContact>Truly Gorgeous Unit 4
                      (South) Vinnetrow Business Park Vinnetrow Road Chichester
                      – West Sussex PO20 1QH
                    </PContact>
                  </AdressContainer>
                  
                  <PhoneContainer style={{
                  'width':'100%',
                  "padding":'0 5px',
                  'paddingBottom':'10px',
                  'display':'flex',
                  //'justifyContent':'center'
                  
                  
                }}>
                  <OpeningHoursDiv>

                    <BoldContact style={{ 'fontSize':'14px'}}>Opening Hours:</BoldContact><br/> Monday: 10 am to 5pm<br/> Tuesday: 10 am to 5pm<br/> Wednesday: 10 am to 5pm<br/> Thursday: 10 am to 5pm<br/> Friday: 10 am to 5pm<br/> Saturday: 9 am to 5pm <br/>Sunday: Closed
                  </OpeningHoursDiv>
                  </PhoneContainer>

                  
                  
                  


                 

                  
                </ContactDetailsContainer>
              </ContactDetails>

              {/*  */}

            

              <IframeBoxContainer>
                <IframeBox
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10081.628828875313!2d-0.7505814!3d50.8236209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf93b380bcdb6e6e!2sTruly%20Gorgeous%20Wedding%20Dresses!5e0!3m2!1sen-419!2suk!4v1645437678011!5m2!1sen-419!2suk"
                  allowFullScreen=""
                  loading="lazy"
                ></IframeBox>
              </IframeBoxContainer>
            </ContactBoxes2>
          </ContainerBoxesContact>
        </>
     

    </ContainerContact>
    </>
  )
}

export default ContactContainer;
