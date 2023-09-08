export function TaskCard( { task } ){
    return (
        <div> 
        <h1>{task.nombre}</h1>

        <br />
        <h2>{task.description}</h2>
        <br />
        <h2> <p>{task.fecha_creacion}</p></h2>
        <h2> {task.estado}</h2>
        <br />
        <hr/>
            </div>
    )

}


export default TaskCard