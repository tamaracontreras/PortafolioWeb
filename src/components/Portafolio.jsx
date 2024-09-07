const Portafolio = () => {
  return (
    <section
      id="portafolio"
      className="h-screen bg-slate-100 flex flex-col items-center justify-center py-16"
    >
      {/* Título centrado */}
      <h1 className="text-4xl font-bold text-center mb-2">Portafolio</h1>

      {/* Contenedor principal alineado al centro */}
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4 mt-5">
        {/* Contenedor del Texto */}
        <div className="w-full md:w-1/2 p-8 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
          <div>
            <p className="text-lg text-justify">
              Soy desarrolladora web con formación en Laboratoria, especializada
              en la creación de soluciones digitales funcionales y visualmente
              atractivas, utilizando tecnologías como HTML, CSS, JavaScript y
              React. Mi enfoque en el aprendizaje continuo y mi capacidad para
              adaptarme rápidamente a nuevos retos me permiten mantenerme a la
              vanguardia de la innovación tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
