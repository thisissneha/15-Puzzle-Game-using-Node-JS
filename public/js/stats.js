// fetch players stats from database
const ul = document.getElementById('user');
const url = '/stats';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let users = data.message;

        for (let user of users) {
            let li = document.createElement('li');
            li.style.display = 'flex';

            li.innerHTML = `<img src="img/user-logo.jpg" class="player-logo"><span class="player-li">${user.userID}</span><span class="player-li">${user.moves}</span><span class="player-li">${user.time}</span><span class="timestamp">${user.timeStamp}</span>`;

            ul.appendChild(li);
        }
    })
    .catch(function (error) {
        console.log(error);
    });



// display player-stats
document.getElementById("stats").addEventListener('click', function () {
    document.getElementById("play").style.display = 'none';
    document.getElementById("player-stats").style.display = 'block';
});

let back_button = document.getElementById("stats-back-btn");
if (back_button != null) {
    back_button.addEventListener('click', function () {
        document.getElementById("player-stats").style.display = 'none';
        pauseGame();
        let gameTime = document.getElementById('time').textContent;
        if (gameTime === '00:00') {
            document.getElementById("play").innerHTML = "PLAY";
        }
    });
}
