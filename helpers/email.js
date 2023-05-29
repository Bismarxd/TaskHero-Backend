import nodemailer from 'nodemailer'

export const emailRegistro  = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PASS,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PORT,
    },
  });

  //Informacion del Email

  const info = await transport.sendMail({
    from: "TaskHero - Administra tus Proyectos",
    to: email,
    subject: "TaskHero - Comprobar Cuenta",
    text: "Comprueba tu Cuenta en TaskHero",
    html: `
    <div style="background-color: #F5F5F5; padding: 20px;">
      <h1 style="color: #333; font-size: 24px;">Hola ${nombre},</h1>
      <p style="color: #333; font-size: 16px;">Comprueba tu cuenta en TaskHero dando click en el siguiente enlace:</p>
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}" style="display: inline-block; padding: 10px 20px; background-color: #2ECC71; color: #FFF; text-decoration: none; border-radius: 5px; margin-top: 10px;">Comprobar Cuenta</a>
      <p style="color: #333; font-size: 16px;">Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
    </div>
  `,
  });
}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PASS,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PORT,
    },
  });


  //Informacion del Email

  const info = await transport.sendMail({
    from: "TaskHero - Administra tus Proyectos",
    to: email,
    subject: "TaskHero - Reestablecer contraseña",
    text: "Comprueba tu Cuenta en TaskHero",
    html: `
    <div style="background-color: #F5F5F5; padding: 20px;">
      <h1 style="color: #333; font-size: 24px;">Hola ${nombre},</h1>
      <p style="color: #333; font-size: 16px;">Has solicitado reestablecer tu password, reestablece dando click en el siguiente enlace:</p>
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style="display: inline-block; padding: 10px 20px; background-color: #2ECC71; color: #FFF; text-decoration: none; border-radius: 5px; margin-top: 10px;">Reestablecer Contraseña</a>
      <p style="color: #333; font-size: 16px;">Si no solicitaste reestablecer la contraseña, puedes ignorar este mensaje.</p>
    </div>
  `,
  });
};

