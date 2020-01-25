import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as email from "./email";
import * as text from "./text"
admin.initializeApp();

exports.sendMail = functions.https.onRequest(email.handler);
exports.sendText = functions.https.onRequest(text.handler);