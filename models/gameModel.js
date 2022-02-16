const mongoose = require('mongoose');

// database connection
const DB = "mongodb+srv://<username>:<password>@puzzlegame.1u98z.mongodb.net/fifteenPuzzleGame?retryWrites=true";

mongoose
    .connect(DB, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB connection successful!'));

// database schema
const gameSchema = new mongoose.Schema({
    moves: {
        type: Number,
        default: 0
    },
    time: {
        type: String,
        default: '00:00'
    },
    timeStamp: {
        type: Date
    }
});

const PuzzleGame = mongoose.model("PuzzleGame", gameSchema);


module.exports = PuzzleGame;