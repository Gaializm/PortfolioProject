import React, { useState } from 'react';
import style from '../Styles/Carousel.module.css';

const Carousel = ({ children, itemWidth }) => {
    // Convert children to an array (in case it's not already)
    const items = React.Children.toArray(children);

    const [currentIndex, setCurrentIndex] = useState(items.length/2); // Start around the middle of the array

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    // Disable next button if at the last item
    const isNextDisabled = currentIndex === items.length - 1;
    // Disable prev button if at the first item
    const isPrevDisabled = currentIndex === 1;

    // Calculate the translateX value to center the active item
    const translateX = -currentIndex * itemWidth*1.12 + (window.innerWidth / 2 - itemWidth / 2);

    return (
        <div className={style["carousel-wrapper"]}>
            <div className={style["carousel-container"]}>
                <div
                    className={style["carousel"]}
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                width: `${itemWidth}px`,
                                flexShrink: 0,
                                transform: index === currentIndex ? 'scale(1.1)' : 'scale(0.9)', // Highlight the active item
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className={style["carousel-controls"]}>
                <button
                    onClick={handlePrev}
                    className={style["carousel-button"]}
                    disabled={isPrevDisabled}
                >
                    &lt; {/* Left arrow */}
                </button>
                <button
                    onClick={handleNext}
                    className={style["carousel-button"]}
                    disabled={isNextDisabled}
                >
                    &gt; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
};

export default Carousel;