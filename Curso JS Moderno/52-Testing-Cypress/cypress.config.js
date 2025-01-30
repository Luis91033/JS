/** @format */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html",
    viewportHeight: 1500,
    viewportWidth: 1200,
  },
});
