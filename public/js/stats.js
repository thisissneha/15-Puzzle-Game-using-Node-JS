const ul = document.getElementById('user');
const url = 'http://127.0.0.1:3000/stats/test_id';
// let id = 1;



fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let users = data.message;
        console.log(data);

        for (let user of users) {
            let li = document.createElement('li');

            console.log(user.moves);
            console.log(user.time);
            li.style.display = 'flex';

            li.innerHTML = `<img src="img/user-logo.jpg" class="player-logo"><span class="player-li">test_id</span><span class="player-li">${user.moves}</span><span class="player-li">${user.time}</span><span class="timestamp">${user.timeStamp}</span>`;

            ul.appendChild(li);
        }
    })
    .catch(function (error) {
        console.log(error);
    });