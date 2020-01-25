import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as email from "./email";
admin.initializeApp();

exports.sendMail = functions.https.onRequest(email.handler);
