import React from 'react';
import style from '../Styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={style["footer"]}>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Footer;