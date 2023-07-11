const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.createUser = functions.https.onRequest(async (req, res) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  const writeResult = await getFirestore()
    .collection("users")
    .add({ firstName: "from firebase functions" });
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});
