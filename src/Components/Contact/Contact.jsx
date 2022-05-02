import React from 'react';
import './Contact.css';
import '../Services/Services.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_x3n9a5o', 'template_ec5slwd', form.current, 'IjLxYa40k0Uey7fy9')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                </div>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact