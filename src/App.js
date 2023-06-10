
import React from 'react';
import Encabezado from "./componentes/encabezado/Encabezado.jsx";
import MiApi from './componentes/miapi/MiApi.jsx';

function App() {
  const urlImagen = "https://i.pinimg.com/originals/fa/3a/6c/fa3a6cb112638bdda62973e635349fdc.png";

  return (
    <div className="App">
      <Encabezado titulo="Personajes de Naruto" texto="(no totalmente actualizada)" urlImagen={urlImagen} />
      <MiApi/>
    </div>
  );
}

export default App;
