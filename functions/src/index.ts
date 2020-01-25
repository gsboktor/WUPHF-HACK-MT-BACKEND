import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "justwuphfit@gmail.com",
    pass: "hackmt123"
  }
});
exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.body.dest;
    console.log(dest);
    const message = req.body.message;
    const from = req.body.from;

    const mailOptions = {
      from: "WUPHF <justwuphfit@gmail.com>",
      to: dest,
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
});
