// server.js (Node.js + Express)
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de Nodemailer (aquí debes configurar tu servicio de correo)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tamimpresiondigital@gmail.com',
    pass: 'impresion0101.',
  },
});

// Ruta para manejar el envío del formulario
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `Mensaje de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el mensaje:', error);
      res.status(500).send('Hubo un problema al enviar el mensaje');
    } else {
      console.log('Mensaje enviado:', info.response);
      res.status(200).send('Mensaje enviado con éxito');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
