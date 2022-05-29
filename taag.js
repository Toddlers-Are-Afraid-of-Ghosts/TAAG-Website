const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const server = http.createServer(app);
const { exec } = require("child_process");

const PORT = 13068
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.post('/api/pull', (req, res) => {
    res.sendStatus(202)
    exec('git pull ', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        else {
            console.log(stdout)

        }
    })
}).get('/api/pull', (req, res) => {
    res.send("Pulled")
});