// import memoria from '../img/memoria.jpg';
//falta arreglar las imagenes de cada proyecto, la info y que tenga la alineacion que entrega tailwind
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
        {/* Tarjeta 1 */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">
                Transformación Digital{" "}
              </h5>
              <p className="text-gray-700">
                Soluciones personalizadas para destacar su marca y captar la
                atención de sus visitantes.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">Accesibilidad</h5>
              <p className="text-gray-700">
                Ofrezco una experiencia fluida en todos los dispositivos,
                garantizando que su sitio sea accesible, fácil de navegar y
                visualmente atractivo.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">Optimizado para SEO</h5>
              <p className="text-gray-700">
                Optimizamos su sitio web para que sea más fácil de encontrar en
                buscadores como Google, aumentando así su visibilidad en línea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
