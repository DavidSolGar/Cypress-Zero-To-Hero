const { defineConfig } = require("cypress");
module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  // reporter : "cypress-multi-reporters",
  //   reporterOptions : {
  //   configFile: "reporter-config.json"
  // },


  env: {
    username: 'testdavichin1@gmail.com',
    password: 'testdavichin1',
    apiUrl: 'https://conduit-api.bondaracademy.com'
  },

  retries: {
    runMode: 2,
    openMode: 0
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const username = process.env.DB_USERNAME
      const password = process.env.PASSWORD

      // if(!password){
      //   throw new Error(`Missing PASSWORD environment variable`)
      // }
      config.env = { username, password }
      return config

    },
    baseUrl: "https://conduit.bondaracademy.com/",
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    excludeSpecPattern: '**/examples/*'
  },
});