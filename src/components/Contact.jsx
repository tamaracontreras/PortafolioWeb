import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5s5pfq', 'template_qh862aw', form.current, 'M8J3OP9qgND_k82ZQ')
      .then((result) => {
          console.log('Correo enviado:', result.text);
      }, (error) => {
          console.log('Error al enviar el correo:', error.text);
      });
  };

  return (
    <section id="contacto" className="container p-5 bg-light rounded-lg shadow-lg max-w-lg md:max-w-md sm:max-w-sm h-auto min-h-[400px] mt-100 pt-16" >
         <h1 className='text-center p-2 mt-10'>Contáctame</h1>

    <form ref={form} onSubmit={sendEmail}>
    <div className="mb-3">
          <label htmlFor="name" className="form-label text-gray-700">Nombre</label>
          <input 
          type="text"
          className="form-control w-full p-2 border border-blue-300 rounded-md focus:ring focus:ring-blue-200"
          id="name"
          name="user_name" 
          placeholder="Ingresa tu nombre o apodo" required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-gray-700">Email</label>
          <input 
          type="email"
          className="form-control"
          id="email" 
          name="user_email"
          placeholder="nombre@ejemplo.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-gray-700">Mensaje</label>
          <textarea
          className="form-control" 
          id="message" 
          name="message" 
          rows="5" 
          placeholder="Escribe tu mensaje aquí" required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary hover:bg-blue-700">Enviar</button>
    </form>
    </section>
  );
};

export default Contact;
