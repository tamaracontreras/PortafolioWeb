// App.jsx

import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Servicess from "./components/Servicess";
import Portafolio from "./components/Portafolio";
import AboutMe from "./components/Aboutme";
import Contacto from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Home />
          <AboutMe />
          <Portafolio />
          <Servicess />
          <Contacto />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
