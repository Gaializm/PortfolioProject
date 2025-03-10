import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import style from '../Styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={style["footer"]}>
            <nav>
                <Link smooth to="#about">About</Link>
                <Link smooth to="#projects">Projects</Link>
                <Link smooth to="#testimonials">Testimonials</Link>
                <Link smooth to="#contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Footer;