import desk from "../img/desk.jpg";
import "../styles/components/Aboutme.css"; // Asegúrate de enlazar el CSS

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-screen bg-slate-100 flex flex-col items-center justify-center py-16"
    >
      {/* Título centrado */}
      <h1 className="text-4xl font-bold text-center mb-2">About Me</h1>

      {/* Contenedor principal alineado al centro */}
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4 mt-5">
        {/* Contenedor del Texto */}
        <div className="w-full md:w-1/2 p-8 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
          <div>
            <p className="text-lg text-justify mb-4">
              Soy desarrolladora web con formación en Laboratoria, especializada
              en la creación de soluciones digitales funcionales y visualmente
              atractivas, utilizando tecnologías como JavaScript y React. Mi
              enfoque en el aprendizaje continuo y mi capacidad para adaptarme
              rápidamente a nuevos retos me permiten mantenerme a la vanguardia
              de la innovación tecnológica.
            </p>
            <img
              src={desk}
              id="desk"
              className="w-full object-cover object-bottom rounded-lg"
              alt="desarrollo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
