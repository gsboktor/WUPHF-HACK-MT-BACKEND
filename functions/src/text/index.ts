import * as nodemailer from "nodemailer";
import * as functions from "firebase-functions";

const cors = require("cors")({ origin: true });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "justwuphfit@gmail.com",
    pass: "hackmt123"
  }
});

export const handler = (
  req: functions.https.Request,
  res: functions.Response
): void => {
  cors(req, res, () => {
    const phone_number = req.body.phone_number;
    const carrier = req.body.carrier;
    const message = req.body.message;
    const from = req.body.from;

    const mailOptions = {
      from: "WUPHF <justwuphfit@gmail.com>",
      to: phone_number + carrier,
      subject: "WHUF from " + from,
      text: message
    };

    return transporter.sendMail(mailOptions, (erro, _) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send({
        status: "success"
      });
    });
  });
};
