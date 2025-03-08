import React from 'react';
import Carousel from './Carousel';
import Quote from './Quote';
import sandyPic from '../assets/Sandy.png';
import bobPic from '../assets/Bob.png';
import patPic from '../assets/Patrick.png';
import style from '../Styles/Carousel.module.css';

const TestimonialsCarousel = () => {
    const myTestimonials = [
        {
            id: 1,
            icon: sandyPic,
            name: 'Sandy',
            text: 'Gaia did a good job!'
        },
        {
            id: 2,
            icon: bobPic,
            name: 'Robert',
            text: 'Gaia did a great job!'
        },
        {
            id: 3,
            icon: patPic,
            name: 'Patrick',
            text: 'Gaia did an awesome job!'
        }
    ];

    return (
        <Carousel itemWidth={330}> {/* Adjust itemWidth as needed */}
            {myTestimonials.map((testimonial, index) => (
                <Quote key={index} icon={testimonial.icon} text={testimonial.text} name={testimonial.name} />
            ))}
        </Carousel>
    );
};

export default TestimonialsCarousel;