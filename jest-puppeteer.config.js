const port = process.env.TEST_SERVER_PORT
  ? Number(process.env.TEST_SERVER_PORT)
  : 3000

process.env.TEST_SERVER_PORT = port

module.exports = {
  launch: {
    headless: process.env.CI === 'true',
    slowMo: 20,
  },
  browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
  server: {
    command: `PORT=${port} react-scripts start`,
    port,
    launchTimeout: 4000,
  },
} 


// NOTE: the above module works but Jest gets moody sometimes. 
// If it fails, try (a) running 'npm run kill:node' then test and (b) try some of the below settings instead.

// module.exports = {
//   launch: {
//     headless: false,
//     slowMo: 30,
//     devtools: false,
//     args: ["--no-sandbox", "--disable-popup-blocking", "--disable-infobars"]
//   },
//   browserContext: 'default',
//   server: {
//     command: `PORT=3000 react-scripts start`,
//     command: `PORT=3000 BROWSER=none npm run start `,
//     port: 3000,
//     launchTimeout: 4000,
//   },
// }