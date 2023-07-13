const { TwitterApi } = require("twitter-api-v2");

const queryTwitter = async () => {
  const bearerToken = process.env.twitter_bearer_token;
  console.log("bearerToken",bearerToken)
  const twitterClient = new TwitterApi(bearerToken);

  // Tell typescript it's a readonly app
  const readOnlyClient = twitterClient.readOnly;

  // Play with the built in methods
  const user = await readOnlyClient.v2.userByUsername("plhery");
  console.log(user);
};

module.exports = {
  queryTwitter,
};
