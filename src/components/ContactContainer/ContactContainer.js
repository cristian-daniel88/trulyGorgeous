import React from 'react'
import { BoldContact, ContactBoxes1, ContactBoxes2, ContactDetails, ContactDetailsContainer, ContactForm, ContainerBoxesContact, ContainerContact, AdressContainer, Form, IframeBox, PContact, PhoneContainer, IframeBoxContainer, Label, Input, TextArea } from './ContactContainerStyles'

function ContactContainer() {
  return (
    <ContainerContact>
        <ContainerBoxesContact>
            <ContactBoxes1>
                <ContactDetails>
                    <ContactDetailsContainer>
                            <PhoneContainer>
                                <PContact><BoldContact>Phone: </BoldContact>01243 788090</PContact>
                                <PContact><BoldContact>Email: </BoldContact>mail@trulygorgeous.co.uk</PContact>
                            </PhoneContainer>


                            <AdressContainer>
                            <PContact><BoldContact>Adress: </BoldContact>Truly Gorgeous Unit 4 (South) Vinnetrow Business Park Vinnetrow Road Chichester – West Sussex PO20 1QH</PContact>
                            </AdressContainer>
                    </ContactDetailsContainer>
                </ContactDetails>


                <ContactForm>
                    <Form>

                        <Label>
                            Your Name
                        </Label>
                        <Input/>

                        <Label>
                            Your Name
                        </Label>
                        <Input/>

                        <Label>
                            Your Name
                        </Label>
                        <Input/>

                        <Label>
                            Your Name
                        </Label>
                        <Input/>

                        <Label>
                            Your Name
                        </Label>
                        <Input/>

                        <Label>
                            Details
                        </Label>
                        <TextArea>

                        </TextArea>
                        


                    </Form>
                </ContactForm>


            </ContactBoxes1>




            <ContactBoxes2>
              <IframeBoxContainer>
                  


                <IframeBox  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10081.628828875313!2d-0.7505814!3d50.8236209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf93b380bcdb6e6e!2sTruly%20Gorgeous%20Wedding%20Dresses!5e0!3m2!1ses-419!2suk!4v1645437678011!5m2!1ses-419!2suk"
          allowFullScreen="" loading="lazy">

                </IframeBox>
              
              </IframeBoxContainer>
            </ContactBoxes2>
        </ContainerBoxesContact>
    </ContainerContact>
  )
}

export default ContactContainer