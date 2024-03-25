import Project from "./project";
import projects from "../assets/dataProjects.json";

import "../style/projectGrid.css";

function ProjectsGrid() {
    return (
        <div className="grid-container">
            {projects.map((proj, i) => (
                <Project
                    key={i}
                    name={proj.name}
                    description={proj.description}
                    repo={proj.repo}
                />
            ))}
        </div>
    );
}

export default ProjectsGrid;
