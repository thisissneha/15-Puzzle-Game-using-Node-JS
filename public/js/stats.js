const ul = document.getElementById('user');
const url = '/stats/test_id';
// let id = 1;


// let removeByteOrderMark = a => a[0] == "\ufeff" ? a.slice(1) : a;
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let users = data.message;
        // console.log(data);

        for (let user of users) {
            let li = document.createElement('li');
            li.style.display = 'flex';

            li.innerHTML = `<img src="img/user-logo.jpg" class="player-logo"><span class="player-li">test_id</span><span class="player-li">${user.moves}</span><span class="player-li">${user.time}</span><span class="timestamp">${user.timeStamp}</span>`;

            ul.appendChild(li);
        }
    })
    .catch(function (error) {
        console.log(error);
    });