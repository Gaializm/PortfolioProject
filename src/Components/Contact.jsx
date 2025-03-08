import React from 'react';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/mail.png';
import style from '../Styles/ContactSection.module.css'; 

const Contact = () => {
    return (
        <div className={style["contact"]}>
            <h2>Contact</h2>
            <div className={style["contact-info"]}>
                <div className={style["contact-item"]}>
                    <img src={emailIcon} alt="email" />
                    <p>Email: <a href={'mailto: placeholder@gmail.com'}>placeholder@gmail.com</a></p>
                </div>
                <div className={style["contact-item"]}>
                    <img src={phoneIcon} alt="phone" />
                    <p>Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;