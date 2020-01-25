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
    const dest = req.body.dest;
    console.log(dest);
    const message = req.body.message;
    const from = req.body.from;

    const mailOptions = {
      from: "WUPHF <justwuphfit@gmail.com>",
      to: dest,
      subject: "WUPHF from " + from,
      text: message
    };

    transporter.sendMail(mailOptions, (erro, _) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send({
        status: "success"
      });
    });
  });
};
