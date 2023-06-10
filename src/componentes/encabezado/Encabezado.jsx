import React from 'react';
import "./encabezado.css";

const Encabezado = ({ titulo,texto, urlImagen }) => {
  return (
    <div className='contenedor-encabezado'>
      <h1>{titulo}</h1>
      <img src={urlImagen} alt="Banner" />
      <h5>{texto}</h5>
    </div>
  );
};

export default Encabezado;

