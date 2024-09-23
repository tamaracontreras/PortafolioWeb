const Nav = () => {
  return (
    <nav className="w-full p-4  fixed top-0">
      <ul className="flex justify-center space-x-4">
        <li className="nav-item">
          <a className="text-black hover:text-gray-200" href="#home">
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
