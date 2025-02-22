import style from '../Styles/Projects.module.css';

const ProjectCard = ({ photo, projectName, description }) => {
    return (
        <div className={style["project-cards"]} >
            <div className={style["project-card_image"]} >
                <img src={photo} alt={projectName} />
            </div>
            <div className={style["project-card_content"]} >
                <h2>{projectName}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;