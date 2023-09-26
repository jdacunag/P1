export function ProjectsCard({ Proyecto }) {
    return (
        <div>
            <h1> {Proyecto.nombre} </h1>

            <br />
            <h2> {Proyecto.descripcion}</h2>
            <br />
            <hr />
        </div>
    );
}

export default ProjectsCard;
