//express framework
const express = require('express')
const app = express()

//config
const { port } = require('./config')

//create server
const http = require('http')
const server = http.createServer(app)

const { expressLoader, mysqlLoader } = require('./loaders')

//express loader
expressLoader(app)

//db connection
mysqlLoader();

//server connection
server.listen(port, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }
    console.log(`
        ########################################
        🛡️ HTTP/S server listening on port: ${port} 🛡️ 
        ########################################
      `);
});
