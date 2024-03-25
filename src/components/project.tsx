import "../style/project.css";

import projects from "../assets/dataProjects.json";

import comptoir from "../assets/logoComptoir.png";
import getSober from "../assets/getSober.png";
import quizzz from "../assets/quizzz.png";

const IMAGES = {
    [projects[0].name]: comptoir,
    [projects[1].name]: getSober,
    [projects[2].name]: quizzz,
};

interface ProjectProps {
    name: string;
    description: string;
    repo: string;
}

function Project({ name, description, repo }: ProjectProps) {
    return (
        <div className="project-container">
            <h2>{name}</h2>
            <a href={repo} target="_blank">
                <img
                    src={IMAGES[name]}
                    alt="visuel du projet"
                    className="project-img"
                />
            </a>
            <p>{description}</p>
        </div>
    );
}

export default Project;
