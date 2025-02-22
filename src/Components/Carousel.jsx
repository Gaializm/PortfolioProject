import React, { useState, useEffect } from 'react';
import image from '../assets/outlined-placeholder-blank.svg';
import Skill from './Skill';
import style from '../Styles/Carousel.module.css';

const Carousel = () => {
    const mySkills = [
        {
            id: 1,
            icon: image,
            name: 'Programming',
            description: 'Im able to program in multiple languages',
        },
        {
            id: 2,
            icon: image,
            name: 'Programming',
            description: 'Im able to program in multiple languages',
        },
        {
            id: 3,
            icon: image,
            name: 'Programming',
            description: 'Im able to program in multiple languages',
        },
        {
            id: 4,
            icon: image,
            name: 'Programming',
            description: 'Im able to program in multiple languages',
        },
        {
            id: 5,
            icon: image,
            name: 'Programming',
            description: 'Im able to program in multiple languages',
        },
    ];

    // Duplicate the first and last cards for seamless looping
    const duplicatedSkills = [mySkills[mySkills.length - 1], ...mySkills, mySkills[0]];

    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real card
    const [isTransitioning, setIsTransitioning] = useState(true);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // Handle the transition when reaching the end
    useEffect(() => {
        if (currentIndex === duplicatedSkills.length - 1) {
            // If at the last duplicated card, instantly reset to the real last card
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 300); // Match the transition duration
        } else if (currentIndex === 0) {
            // If at the first duplicated card, instantly reset to the real first card
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(duplicatedSkills.length - 2);
            }, 300); // Match the transition duration
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex]);

    return (
        <div className={style["carousel-container"]}>
            <div
                className={style["carousel"]}
                style={{
                    transform: `translateX(-${currentIndex * 70}px)`,
                    transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <Skill key={index} icon={skill.icon} name={skill.name} description={skill.description} />
                ))}
            </div>
            <div className={style["carousel-controls"]}>
                <button onClick={handlePrev} className={style["carousel-button"]}>
                    &lt; {/* Left arrow */}
                </button>
                <button onClick={handleNext} className={style["carousel-button"]}>
                    &gt; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
};

export default Carousel;