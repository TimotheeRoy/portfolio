import Project from "./project"
import projects from "../assets/dataProjects.json"

import '../style/projectGrid.css'

function ProjectsGrid () {

    return(
        <div className="grid-container">
            {projects.map(proj => <Project 
            key={proj.id}
            name={proj.name} 
            description={proj.description} 
            img={proj.img} />)}
        </div>
    )
}


export default ProjectsGrid