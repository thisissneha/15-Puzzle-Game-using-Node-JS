const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const staticPath = `${__dirname}/public`;


// middleware

app.use(function (req, res, next) {
    if (req.headers['content-type'] === "text/plain;charset=UTF-8") {
        req.headers['content-type'] = 'application/json';
    }
    next();
});

app.use(bodyParser.json());
app.use(express.static(staticPath));


// server

app.listen(port, () => {
    console.log(`listening to port ${port}....`)
});