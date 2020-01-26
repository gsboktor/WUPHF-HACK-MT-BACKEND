import * as functions from "firebase-functions";
const admin = require("firebase-admin");
admin.initializeApp();
import * as email from "./email";
import * as text from "./text";
import * as onboard from "./onboard";
import * as userSearch from "./user_search";
import * as wuphf from "./wuphf";

exports.sendMail = functions.https.onRequest(email.handler);
exports.onboard = functions.https.onRequest(onboard.handler);
exports.userSearch = functions.https.onRequest(userSearch.handler);
exports.sendText = functions.https.onRequest(text.handler);
exports.wuphf = functions.https.onRequest(wuphf.handler);
