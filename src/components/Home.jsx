import CubeComponent from "./CubeComponent";
const Home = () => {
  return (
    <section
      id="home"
      className=" flex flex-col items-center justify-center h-screen bg-slate-100 mt-100 pt-16 "
    >
      <div className="text-center p-2 mt-10">
        <h1 className="animate-bounce animate-twice font-bold mt-1 text-8xl">
          Hola!
        </h1>
        <div className="w-full max-w-4xl px-4 px-4 mt-8">
          <p className="text-5xl font-bold">
            Te puedo ayudar a crear la web perfecta para tu negocio o
            portafolio.
            <br />
          </p>
        </div>
        <a href="#" className="text-blue-600 hover:text-blue-800 underline">
          See my work
        </a>
      </div>
      <CubeComponent />
    </section>
  );
};

export default Home;
