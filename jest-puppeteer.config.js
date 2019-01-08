const port = process.env.TEST_SERVER_PORT
    ? Number(process.env.TEST_SERVER_PORT)
    : 3000

process.env.TEST_SERVER_PORT = port

// NOTE: if acceptance test fails, reduce or remove the slowMo setting below

module.exports = {
  launch: {
      headless: false,
      slowMo: 30,
      devtools: true,
      args: ["--no-sandbox", "--disable-popup-blocking", "--disable-infobars"]
  },
  browserContext: 'default',
  server: {
      command: `PORT=3000 react-scripts start`,
      port: 3000,
      launchTimeout: 4000,
  },
}