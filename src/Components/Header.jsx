import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import style from '../Styles/Header.module.css';

const Header = () => {
    return (
        <header className={style["header"]}>
            <h1>Gaializ Mejias Gonzalez</h1>
            <nav>
                <Link smooth to="#about">About</Link>
                <Link smooth to="#projects">Projects</Link>
                <Link smooth to="#testimonials">Testimonials</Link>
                <Link smooth to="#contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;