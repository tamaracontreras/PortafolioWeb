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
      <h1 className="text-4xl font-bold text-center mb-2">Servicios</h1>
      {/* Contenedor de las tarjetas */}
      <div className="flex flex-row justify-center w-full max-w-6xl px-4 space-x-4 mt-5">
        {/* Cada tarjeta en una fila */}
        <Card
          title="Transformación Digital"
          description="Soluciones personalizadas para destacar su marca y captar la atención de sus visitantes."
          image={hand}
          className="max-w-xs" // Clases para reducir el tamaño de la card
        />
        <Card
          title="Accesibilidad"
          description="Experiencia fluida en todos los dispositivos, garantizando que su sitio sea accesible."
          image={memoria}
          className="max-w-xs" // Clases para reducir el tamaño de la card
        />
        <Card
          title="Optimizado para SEO"
          description="Optimizamos su sitio web para que sea más fácil de encontrar en buscadores como Google."
          image={seo}
          className="max-w-xs" // Clases para reducir el tamaño de la card
        />
      </div>
    </section>
  );
};

export default Services;
