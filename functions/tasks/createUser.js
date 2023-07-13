const { firestore } = require("../firebase");

const createUser = async () => {
  const writeResult = await firestore
    .collection("users")
    .add({ firstName: "from firebase functions" });
  return `Message with ID: ${writeResult.id} added.`;
};

// Export the task functions
module.exports = {
  createUser,
};
