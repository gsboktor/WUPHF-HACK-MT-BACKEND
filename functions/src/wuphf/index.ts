import * as functions from "firebase-functions";
import sendEmail from "../email/sendEmail";
import sendText from "../text/sendText";

const admin = require("firebase-admin");
const db: FirebaseFirestore.Firestore = admin.firestore();

/*
takes in a toUUID and a fromUUID, and message. Sends Woof from fromUUID to toUUID
 */
export const handler = (
  req: functions.https.Request,
  res: functions.Response
) => {
  const fromUUID = req.body.from;
  const toUUID = req.body.to;
  const message = req.body.message;

  getUser(fromUUID, (fromUser: FirebaseFirestore.DocumentData) => {
    getUser(toUUID, toUser => {
      sendEmail(toUser.email, fromUser.username, "my ass");
      sendText(toUser.phone, toUser.carrier, fromUser.username, message);
      res.send({
        status: "finished"
      });
    });
  });
};

const getUser = (
  uuid: string,
  onComplete: (doc: FirebaseFirestore.DocumentData) => void
) => {
  let ref = db.collection("USERS");
  ref
    .doc(uuid)
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log("success in big api");
        onComplete(doc.data()!);
      } else {
        console.log("error in big api");
      }
    })
    .catch(err => {
      console.log("error in big api: " + err);
    });
};
