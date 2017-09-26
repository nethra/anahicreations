var https = require('https');
var fs = require('fs');
const express = require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./client/src/static/'));
app.use(express.static('./client/dist/'));

// start the server
/*var secureServer = https.createServer({
key:fs.readFileSync('./ssl/server.key'),
cert:fs.readFileSync('./ssl/server.crt'),
ca:fs.readFileSync('./ssl/ca.crt'),
requestCert:true,
rejectUnauthorized:false
},app).listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});*/
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
