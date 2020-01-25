import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
const cors = require("cors")({ origin: true });
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "justwuphfit@gmail.com",
    pass: "hackmt123"
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;

    const mailOptions = {
      from: "WUPHF <justwuphfit@gmail.com>", // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: "I'M A PICKLE!!!", // email subject
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              <br />
              <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
          ` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, _) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
});
