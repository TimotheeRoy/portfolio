import "../style/project.css"

interface ProjectProps {
    name : string
    description : string
    img : string
}

function Project({name , description , img } : ProjectProps){

    return(
        <div className="project-container">
            <h2>{name}</h2>
            <img src={img} alt="visuel du projet" />
            <p>
                {description}
            </p>
        </div>
    )
}



export default Project