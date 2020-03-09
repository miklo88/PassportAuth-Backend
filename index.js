// require("dotenv").config();
const server = require("./server/api");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || "5000";

// // JEST TEST /// if statement to redirect the server to be exported and ran in the index.spec.js for testing
// if (!module.parent) {
//   // backend server port/host
//   server.listen(port, () => {
//     console.log(`\n*** Listening on http://${host}:${port} ***\n`);
//   });
// }
// // exporting the api as a server to the index.spec.js file.
// module.exports = server; /////JEST TEST

// backend server port/host
server.listen(port, () => {
  console.log(`\n*** Listening on http://${host}:${port} ***\n`);
});
