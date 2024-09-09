import Card from "./card"; // Importa el componente Card
// import memoria from "../img/memoria.jpg"; // Importa las imágenes de tus proyectos
import otroProyecto from "../img/interactive.jpg";
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
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4">
        {/* Utilizando el componente Card para cada proyecto */}
        <Card
          title="Proyecto Dataverse"
          description="Plataforma en línea con interfaz de tarjetas filtrables y ordenables para explorar datos de forma visual y agradable.
          Tecnologías: Vanilla JavaScript para filtrado y ordenamiento, JSON para la gestión de datos, y Figma para el diseño y prototipado."
          image={dataverse}
        />
        <Card
          title="Otro Proyecto"
          description="Descripción de otro proyecto, sus características y los resultados obtenidos."
          image={otroProyecto}
        />
        {/* Agrega más tarjetas según sea necesario */}
      </div>
    </section>
  );
};

export default Portfolio;
