const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://www.saucedemo.com",
    specPattern: "**/*.feature",
    setupNodeEvents,
    env: {
      password: 'secret_sauce'
    }
  },
});