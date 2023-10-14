import React from 'react';

const cardStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
};

const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: '100px solid transparent',
    borderRight: '100px solid transparent',
    borderBottom: '50px solid #f0f0f0',
    position: 'absolute',
    top: '0',
    left: '50%', // Alinea el triángulo con el centro del cuadrado
    transform: 'translateX(-50%)', // Ajusta la posición horizontal para centrar el triángulo
};

const textStyle = {
    color: 'black',
};

function ProjectsCard({ Proyecto }) {
    return (
        <div style={cardStyle}>
            <div style={triangleStyle}></div>
            <h2 style={textStyle}>{Proyecto.nombre}</h2>
            <br />
            <h2>{Proyecto.descripcion}</h2>
            <br />
        </div>
    );
}

export default ProjectsCard;
