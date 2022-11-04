// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     supportFile: false,
//     video: false,
//     screenshotOnRunFailure: false,
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    baseUrl: "http://localhost:3000",
    specPattern: ["cypress/e2e/*.*.js", "cypress/integration/**/*.*.js"],
  },
});
