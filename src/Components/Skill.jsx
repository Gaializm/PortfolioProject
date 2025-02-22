import style from '../Styles/Skills.module.css';

const Skill = ({ icon, name, description }) => {
    return (
        <div className={style["skill-cards"]}>
            <div className={style["skill-card_image"]}>
                <img src={icon} alt={name} />
            </div>
            <div className={style["skill-card_content"]}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Skill;