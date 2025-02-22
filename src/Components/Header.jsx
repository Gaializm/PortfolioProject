import React from 'react';
import style from '../Styles/Header.module.css'; 

const Header = () => {
    return (
        <header className={style["header"]}>
            <h1>Gaializ Mejias Gonzalez</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;