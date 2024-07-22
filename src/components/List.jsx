import datadbz from '../img/datadbz.jpg';
import interactive from '../img/interactive.jpg';
import moviegeek from '../img/moviegeek.jpg';
import memoria from '../img/memoria.jpg';
  //falta arreglar las imagenes de cada proyecto, la info y que tenga la alineacion que entrega tailwind
  const List = () => {
    return (
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={datadbz} className="w-full h-32 object-cover" alt="datadbz" />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-bold mb-2">App Data Lovers_DragoBall</h5>
              <p className="card-text text-gray-700">Plataforma en línea con una interfaz de tarjetas que permite explorar, filtrar y ordenar datos según las preferencias del usuario.

</p>
            </div>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={interactive} className="w-full h-32 object-cover" alt="interactive" />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-bold mb-2">Interactive Comments</h5>
              <p className="card-text text-gray-700">Sección de comentarios interactiva en un entorno web, mejorando la funcionalidad para coincidir con el diseño proporcionado. <br></br>Desafío de Front-mentor.

</p>
            </div>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={moviegeek} className="w-full h-32 object-cover" alt="moviegeek" />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-bold mb-2">App Movie Geek</h5>
              <p className="card-text text-gray-700">Plataforma de películas que brinda a los usuarios la posibilidad de descubrir contenido según sus gustos personales, ofreciendo año y título.</p>
            </div>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={memoria} className="w-full h-32 object-cover" alt="memoria" />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-bold mb-2">App Juego Memoria Nórdica</h5>
              <p className="card-text text-gray-700">Juego de cartas Memoria Nórdica desafiará tu destreza mental mientras encuentras las parejas de símbolos vikingos iguales para completar el tablero.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default List;