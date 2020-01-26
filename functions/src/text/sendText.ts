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

const sendText = (
  phone: string,
  carrier: string,
  from: string,
  message: string
): void => {
  const mailOptions = {
    from: "WUPHF <justwuphfit@gmail.com>",
    to: phone + carrier,
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

export default sendText;
