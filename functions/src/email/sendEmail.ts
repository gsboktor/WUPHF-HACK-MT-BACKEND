import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "justwuphfit@gmail.com",
    pass: "hackmt123"
  }
});

const sendMail = (dest: string, from: string, message: string): void => {
  const mailOptions = {
    from: "WUPHF <justwuphfit@gmail.com>",
    to: dest,
    subject: "WUPHF from " + from,
    text: message
  };

  transporter.sendMail(mailOptions, (erro, _) => {
    if (erro) {
      console.log("error sending email");
    }
    console.log("email sent");
  });
};

export default sendMail;
