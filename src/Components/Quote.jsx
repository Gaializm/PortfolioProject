import style from '../Styles/Testimonials.module.css';

const Quote = ({ icon, name, testimonial }) => {
    return (
        <div className={style["quote-cards"]}>
            <div className={style["quote-card_image"]}>
                <img src={icon} alt={name} />
            </div>
            <div className={style["quote-card_content"]}>
                <h2>{name}</h2>
                <p>{testimonial}</p>
            </div>
        </div>
    );
}

export default Quote;