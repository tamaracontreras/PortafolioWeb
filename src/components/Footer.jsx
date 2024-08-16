
import '../styles/components/Footer.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="contacto flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/tamara-contreras/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/tamaracontreras" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://codepen.io/tam_u" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-heart"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
