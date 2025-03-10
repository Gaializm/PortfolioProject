import { Link } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import Wrapper from './Wrapper';
import style from '../Styles/Projects.module.css';

const Projects = () => {
    const projects = useProjects(); // Access project data from context

    return (
        <Wrapper>
            <h1>My Projects</h1>
            <div className={style["project-cards"]}>
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`} // Link to the project detail page
                        className={style["project-card"]}
                    >
                        <div className={style["project-card_image"]}>
                            <img src={project.photo} alt={project.projectName} />
                        </div>
                        <div className={style["project-card_content"]}>
                            <h2>{project.projectName}</h2>
                            <p>{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
};

export default Projects;