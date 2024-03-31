import Project from "./project";
import projects from "../assets/dataProjects.json";

import "../style/projectGrid.css";

interface ProjectsGridProps {
    isDark: boolean;
}

function ProjectsGrid({isDark} : ProjectsGridProps) {
    return (
        <div className="grid-container">
            {projects.map((proj, i) => (
                <Project
                    key={i}
                    name={proj.name}
                    description={proj.description}
                    repo={proj.repo}
                    demo={proj.demo}
                    isDark={isDark}
                />
            ))}
        </div>
    );
}

export default ProjectsGrid;
