const { addHarpWebpackConfig } = require("@here/harp-webpack-utils/scripts/HarpWebpackConfig");
const myConfig = {};
module.exports = addHarpWebpackConfig(
    myConfig,
    { mainEntry: "./index.js", decoderEntry: "./harp-gl-decoders.js", htmlTemplate: "./index.html" }
);
