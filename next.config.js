

const withVideos = require("next-videos");

// module.exports = withVideos();
module.exports = {
    // Target must be serverless
    ...withVideos(),
    target: "serverless",
  };