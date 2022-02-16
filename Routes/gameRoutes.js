const Puzzle = require('./../models/gameModel');

// routes
app.get("/", (req, res) => {
    res.send("15-puzzle-game");
});

app.get("/stats/test_id", async (req, res) => {
    try {
        const details = await Puzzle.PuzzleGame.find({}).sort({
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