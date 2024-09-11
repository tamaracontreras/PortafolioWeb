import Card from "./card"; // Importa el componente Card
// import memoria from "../img/memoria.jpg"; // Importa las imágenes de tus proyectos
import otroProyecto from "../img/uno.jpg";
import dataverse from "../img/dataverse.jpg";

const Portfolio = () => {
  return (
    <section
      id="portafolio"
      className="bg-slate-100 h-screen flex flex-col items-center justify-center py-16"
    >
      {/* Título de la sección */}
      <h1 className="text-4xl font-bold text-center mb-2">Portafolio</h1>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4 mt-5">
        {/* Utilizando el componente Card para cada proyecto */}
        <Card
          title="Proyecto Dataverse"
          description="Plataforma en línea con interfaz de tarjetas filtrables y ordenables para explorar datos de forma visual y agradable.
          Tecnologías: Vanilla JavaScript para filtrado y ordenamiento, JSON para la gestión de datos, y Figma para el diseño y prototipado."
          image={dataverse}
          projectLink="https://tamaracontreras.github.io/DEV012-dataverse/"
          repoLink="https://github.com/tamaracontreras/DEV012-dataverse"
          showButtons={true}
        />
        <Card
          title="Proyecto Movie Geek!"
          description="Plataforma de películas que brinda a los usuarios la posibilidad de descubrir títulos de películas , según los parámetros de búsqueda que ingrese.
          El proyecto utiliza la API de OMDB con Fetch para obtener datos sobre películas. Se implementa diseño responsivo y se despliega en GitHub Pages para acceso público."
          image={otroProyecto}
          projectLink="https://tamaracontreras.github.io/DEV012-movie-challenge/"
          repoLink="https://github.com/tamaracontreras/DEV012-movie-challenge"
          showButtons={true}
        />
        {/* Agrega más tarjetas según sea necesario */}
      </div>
    </section>
  );
};

export default Portfolio;
