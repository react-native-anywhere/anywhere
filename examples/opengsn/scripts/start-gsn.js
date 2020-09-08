const { GsnTestEnvironment } = require("@opengsn/gsn/dist/GsnTestEnvironment");

(async () => {
  const { deploymentResult } = await GsnTestEnvironment.startGsn("localhost");
  console.log({ deploymentResult });
})();
