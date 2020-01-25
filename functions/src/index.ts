import * as functions from "firebase-functions";
const admin = require("firebase-admin");
import * as email from "./email";
import * as text from "./text"
admin.initializeApp();

import * as email from "./email";
import * as onboard from "./onboard";

exports.sendMail = functions.https.onRequest(email.handler);
exports.onboard = functions.https.onRequest(onboard.handler);
exports.sendText = functions.https.onRequest(text.handler);
