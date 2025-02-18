/** @format */

import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  // Looking to send emails in production? Check out our Email API/SMTP product!
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const { email, nombre, token } = datos;

  const info = await transport.sendMail({
    from: "APV - Administrador de Pacientes de Veterinaria",
    to: email,
    subject: "Comprueba tu cuenta APV",
    text: "Comprueba tu cuenta en APV",
    html: `<p>Hola: ${nombre}, compreba tu cuenta en APV.</p>
    <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a> </p>

    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
  });
};

export default emailRegistro;
