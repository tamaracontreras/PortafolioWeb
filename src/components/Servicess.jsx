import Card from "./card"; // Importa el componente Card
import memoria from "../img/tecno.jpeg"; // Importa la imagen
import hand from "../img/hand.jpeg";
import seo from "../img/seo.jpeg";

const Services = () => {
  return (
    <section
      id="services"
      className="h-screen bg-slate-100 flex flex-col items-center justify-center py-16"
    >
      {/* Título de la sección */}
      <h1 className="text-4xl font-bold text-center mb-2">Servicios</h1>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4">
        {/* Utilizando el componente Card para cada servicio */}
        <Card
          title="Transformación Digital"
          description="Ofrezco mucho más que un simple diseño web. Soluciones personalizadas para destacar su marca y captar la atención de sus visitantes."
          image={hand} // Agrega la imagen correspondiente
        />
        <Card
          title="Accesibilidad"
          description="Ofrezco una experiencia fluida en todos los dispositivos, garantizando que su sitio sea accesible, fácil de navegar y visualmente atractivo."
          image={memoria} // Otra imagen si tienes diferentes
        />
        <Card
          title="Optimizado para SEO"
          description="Optimizamos su sitio web para que sea más fácil de encontrar en buscadores como Google, aumentando así su visibilidad en línea."
          image={seo} // Otra imagen si tienes diferentes
        />
      </div>
    </section>
  );
};

export default Services;
