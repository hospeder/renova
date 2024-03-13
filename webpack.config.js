const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bundle: [
      "./src/count.js",
      "./src/navbar.js",
      "./src/gtm.js",
      "./src/index.js",
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
