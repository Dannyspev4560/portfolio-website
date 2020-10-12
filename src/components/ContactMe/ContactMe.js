import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import {key} from '../../Keys'
import {FormContainer,
        FormHeader,
        FormBody,
        MailFrom,
        Title,
        Message,
        ValidMail,
        SubmitButton
}from './ContactMe.elements'

const ContactMe = () => {

    const [mailsent,setMail]=useState('')


    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('gmail', 'template_kois9an', e.target, key.toString())
          .then((result) => {

            setMail(result.text);

          }, (error) => {
            setMail(error.text);
          });
        e.target.reset();
      }

     


    function emailSent(text){
        if (text){
            if (text=="OK")
                return(
                    <ValidMail sent valid>Sent</ValidMail>
                )
            else return(
                <ValidMail sent >Error</ValidMail>
            )
        }
        else return <ValidMail ></ValidMail>
    }

    return (
        <FormContainer>
            <FormHeader>
                Contact Me
            </FormHeader>
            <FormBody onSubmit={sendEmail}>
                <MailFrom name='email' type='email' placeholder='Your email' ></MailFrom>
                <Title name='title' type='text' placeholder='Title' ></Title>
                <Message name='message' type='text' placeholder='Message' ></Message>
                <SubmitButton name="submit" type="submit" value="Send"></SubmitButton> 
                {emailSent(mailsent)}
            </FormBody>
        </FormContainer>
    )
}

export default ContactMe
