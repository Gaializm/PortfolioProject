import style from '../Styles/About.module.css';
import photo from '../assets/babyMe.jpg';

const About = () => {
    return (
        <div className={style["about"]} >
            <div className={style["about_content"]} >
                <h1> Hello! I'm Gaia. </h1>

                <p>This is a very simplified version of my portfolio which I created myself using React. I wanted to challenge myself, 
                    but I also decided to keep things simple while I am still learning. I am currently a Senior at Purdue University finishing my Bachelor's in Web Programming and Design,
                    and I will start working to complete a Master's degree in Information Systems this coming Fall. When I am not programming or working I like to do crafts such as knitting or
                    crochet. Feel free to take a look at my work and skills, and don't be afraid to reach out with any inquiries! </p>

            </div>
            <div className={style["about_image"]} >
                <img src={photo} alt='Me' />
            </div>
        </div>
    );
}

export default About;