const functions = require("firebase-functions");
const { createUser } = require("./tasks/createuser");
const { queryTwitter } = require("./tasks/queryTwitter");

exports.createUser = functions.https.onRequest(async (req, res) => {
  const writeResult = await createUser();
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.queryTwitter = functions.https.onRequest(async (req, res) => {
  try{
    const writeResult = await queryTwitter();
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
  } catch (e) {
    console.log(e)
    res.json({ result: `Error: ${e}` });
  }
});
