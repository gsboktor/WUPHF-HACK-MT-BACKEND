import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const db = admin.firestore();

/*
accepts in a UUID, username, email, carrier_string to create a record in the USERS collection
*/
export const handler = (
  req: functions.https.Request,
  res: functions.Response
) => {
  const uuid = req.body.uuid;
  const email = req.body.email;
  const phone = req.body.phone;
  const username = req.body.username;
  const carrier = req.body.carrier;

  let docRef = db.collection("USERS").doc(uuid);

  docRef.set({
    email: email,
    phone: phone,
    username: username,
    carrier: carrier
  });

  return res.send({
    status: "success"
  });
};
