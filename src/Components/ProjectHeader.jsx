import React from 'react';
import { Link } from 'react-router-dom'; 
import style from '../Styles/Header.module.css';

const ProjectHeader = () => {
    return (
        <header className={style["header"]}>
            <h1>Gaializ Mejias Gonzalez</h1>
            <nav>
                <Link to="/">Return Home</Link> {/* Link to the home page */}
            </nav>
        </header>
    );
};

export default ProjectHeader;