import React from 'react'
import { ContactBoxes1, ContactBoxes2, ContactDetails, ContactDetailsContainer, ContactForm, ContainerBoxesContact, ContainerContact, Form, IframeBox } from './ContactContainerStyles'

function ContactContainer() {
  return (
    <ContainerContact>
        <ContainerBoxesContact>
            <ContactBoxes1>
                <ContactDetails>
                    <ContactDetailsContainer>

                    </ContactDetailsContainer>
                </ContactDetails>
                <ContactForm>
                    <Form>

                    </Form>
                </ContactForm>
            </ContactBoxes1>
            <ContactBoxes2>

                <IframeBox  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10081.628828875313!2d-0.7505814!3d50.8236209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf93b380bcdb6e6e!2sTruly%20Gorgeous%20Wedding%20Dresses!5e0!3m2!1ses-419!2suk!4v1645437678011!5m2!1ses-419!2suk"
          allowFullScreen="" loading="lazy">

                </IframeBox>
            </ContactBoxes2>
        </ContainerBoxesContact>
    </ContainerContact>
  )
}

export default ContactContainer