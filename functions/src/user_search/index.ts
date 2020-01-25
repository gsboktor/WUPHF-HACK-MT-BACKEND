import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const db: FirebaseFirestore.Firestore = admin.firestore();

/*
accepts a username and returns either uuid = null || UUID of corresponding user
*/
export const handler = (
  req: functions.https.Request,
  res: functions.Response
) => {
  const username = req.body.username;

  let ref = db.collection("USERS");

  ref
    .where("username", "==", username)
    .get()
    .then(snapshot => {
      if (!snapshot.empty) {
        const uuid = snapshot.docs[0].id;
        return res.send({
          uuid: uuid
        });
      } else {
        return res.send({
          uuid: null
        });
      }
    })
    .catch(err => {
      return res.send({
        uuid: null
      });
    });
};
