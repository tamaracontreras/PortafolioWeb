import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alternar el estado abierto/cerrado del menú
  };

  return (
    <nav className="w-full p-4 bg-white fixed top-0 z-10 shadow-md">
      {/* Logo y Botón "hamburger" */}
      <div className="flex justify-between items-center">
        {/* Logo */}

        {/* Botón "hamburger" visible solo en pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none focus:text-gray-700 md:hidden"
        >
          {/* Icono "hamburger" */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú en pantallas medianas y grandes */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:justify-center md:space-x-4 mt-4 md:mt-0`}
      >
        <li className="nav-item">
          <a className="text-black hover:text-gray-300" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="text-black hover:text-gray-300" href="#about-me">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="text-black hover:text-gray-300" href="#portafolio">
            Portafolio
          </a>
        </li>
        <li className="nav-item">
          <a className="text-black hover:text-gray-300" href="#services">
            Servicios
          </a>
        </li>
        <li className="nav-item">
          <a className="text-black hover:text-gray-300" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
