import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

function Contact() {
  // Obtén la ubicación actual
  const { pathname } = useLocation();
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

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
          // Limpiar los campos del formulario
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });

          // Mostrar mensaje de confirmación
          setMessageSent(true);

          // Ocultar el mensaje después de 2 segundos
          setTimeout(() => setMessageSent(false), 1000);
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Determina el título de acuerdo a la ruta
  const title =
    pathname === "/estudiantes" ? "Preguntas sobre el Curso:" : "Contacto";

  return (
    <section id="contact" className="py-10 px-5">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="formName" className="text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="formName"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre o apodo"
              className="p-3 border rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="formEmail" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="formEmail"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="nombre@ejemplo.com"
              className="p-3 border rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="formMessage" className="text-gray-700 font-medium">
              Mensaje
            </label>
            <textarea
              id="formMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Escribe tu mensaje aquí"
              className="p-3 border rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Enviar
            </button>
          </div>
        </form>
        {messageSent && (
          <p className="text-green-500 mt-3">¡Mensaje enviado con éxito!</p>
        )}
      </div>
    </section>
  );
}

export default Contact;
