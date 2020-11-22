const isProd = process.env.NODE_ENV === "production";

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      assetPrefix:
        "",
    };
  }

  return {
      
    /* config options for all phases except development here */
  };
};
