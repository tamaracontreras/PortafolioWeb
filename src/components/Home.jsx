
import CubeComponent from "./CubeComponent";
const Home = () => {
  return (
    <section id="home" className=" justify-center h-screen bg-slate-100 mt-100 pt-16 ">
     
      <div className="text-center p-2 mt-10">
        
        <h1 className="animate-bounce animate-twice font-bold mt-10">Hola!</h1>
        <p className="text-lg">
        Soy Tamara, desarrolladora web apasionada por crear experiencias únicas en línea.
          <br />
          Te puedo ayudar a crear la web perfecta para tu negocio o portafolio.
          <br />
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 underline">See my work</a>
      </div>
      <CubeComponent />
    </section>
  );
};

export default Home;
