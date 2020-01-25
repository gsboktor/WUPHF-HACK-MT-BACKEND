import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const db = admin.firestore();

export const handler = (
  req: functions.https.Request,
  res: functions.Response
): void => {
  let docRef = db.collection("USERS").doc("alovelace");

  docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
};
