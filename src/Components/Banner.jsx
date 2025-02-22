import bannerImage from '../assets/placeholderBanner.png';
import style from '../styles/Banner.module.css';

const Banner = ({formStatus, displayForm }) => {
    return (
        <div className={style["banner"]}>
            <img src={bannerImage} alt="banner" />
            <button onClick={displayForm} className={style["banner-button"]}>Contact</button>
        </div>
    );
}

export default Banner;