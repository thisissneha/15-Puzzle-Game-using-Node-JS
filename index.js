const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const staticPath = `${__dirname}/public`;

const PuzzleGame = require('./models/gameModel.js');

// middleware
app.use(function (req, res, next) {
    if (req.headers['content-type'] === "text/plain;charset=UTF-8") {
        req.headers['content-type'] = 'application/json';
    }
    next();
});

app.use(bodyParser.json());
app.use(express.static(staticPath));


// routes
app.get("/", (req, res) => {
    res.send("15-puzzle-game");
});

app.get("/stats/test_id", async (req, res) => {
    try {
        const details = await PuzzleGame.find({}).sort({
            _id: -1
        }).limit(10);

        res.status(200).send({
            status: 'success',
            message: details
        });
    } catch (err) {
        console.log('ERROR 💥');
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
});

app.post("/player-stats", async (req, res) => {
    try {
        let {
            moves,
            time
        } = req.body;
        console.log(`Moves : ${moves} and Time : ${time}`);
        await PuzzleGame.create({
            moves,
            time,
            timeStamp: Date.now()
        });

        res.status(201).send({
            status: 'success',
            message: req.body
        });
    } catch (err) {
        console.log('ERROR 💥');
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
});


// server
app.listen(port, () => {
    console.log(`listening to port ${port}....`)
});