import React from 'react';
import Carousel from './Carousel';
import Skill from './Skill';
import detailPic from '../assets/detail.png';
import designPic from '../assets/design.png';
import planPic from '../assets/planning.png';
import progPic from '../assets/programming.png';
import paintPic from '../assets/paintbrush.png';
import style from '../Styles/Carousel.module.css';

const SkillsCarousel = () => {
    const mySkills = [
        {
            id: 1,
            icon: progPic,
            name: 'Programming',
            description: 'Im able to program in multiple languages such as Javascript, PHP, etc.',
        },
        {
            id: 2,
            icon: designPic,
            name: 'Design',
            description: 'I have experience designing websites and web pages and simple software applications.',
        },
        {
            id: 3,
            icon: planPic,
            name: 'Project Planning',
            description: 'Ive led multiple teams of varying skill and in diverse subject matters to success.',
        },
        {
            id: 4,
            icon: detailPic,
            name: 'Attention to Detail',
            description: 'I provide thorough documentation for and can easily walk through any project.',
        },
        {
            id: 5,
            icon: paintPic,
            name: 'Graphic Design & Illustration',
            description: 'I am able to use digital imaging tools to create graphics and digital assets.',
        },
    ];

    return (
        <Carousel itemWidth={220}> {/* Adjust itemWidth as needed */}
            {mySkills.map((skill) => (
                <Skill key={skill.id} icon={skill.icon} name={skill.name} description={skill.description} />
            ))}
        </Carousel>
    );
};

export default SkillsCarousel;
