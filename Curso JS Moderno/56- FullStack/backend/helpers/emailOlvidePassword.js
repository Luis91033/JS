/** @format */

import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
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
    subject: "Restablece tu Password",
    text: "Restablece tu Password",
    html: `<p>Hola: ${nombre}, has solicitado restablecer tu password.</p>
    <p>Sigue el siguiente enlace para generar un nuevo password:
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>

    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
  });
};

export default emailOlvidePassword;
