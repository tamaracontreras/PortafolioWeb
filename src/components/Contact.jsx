import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5s5pfq",
        "template_qh862aw",
        form.current,
        "M8J3OP9qgND_k82ZQ"
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
        }
      );
  };

  return (
    <section
      id="contacto"
      className="h-screen bg-slate-100 flex flex-col items-center py-16"
    >
      {/* Título de la sección */}
      <h1 className="text-4xl font-bold text-center mt-8">Contacto</h1>

      {/* Contenedor del formulario */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-6 md:mx-8 mt-8">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control w-full p-3 border border-blue-300 rounded-md focus:ring focus:ring-blue-200"
              id="name"
              name="user_name"
              placeholder="Ingresa tu nombre o apodo"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control w-full p-3 border border-blue-300 rounded-md focus:ring focus:ring-blue-200"
              id="email"
              name="user_email"
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Mensaje
            </label>
            <textarea
              className="form-control w-full p-3 border border-blue-300 rounded-md focus:ring focus:ring-blue-200"
              id="message"
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
