let express = require('express');
let app = express();
let host = 3000
let server = app.listen(host)
let users = [];

app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

let socket = require('socket.io')
let io = socket(server,{
    cors: {
            origin: "http://localhost",
            methods: ["GET", "POST"],
            credentials: true,
            transports: ['websocket', 'polling'],
    },
    allowEIO3: true
    });

io.sockets.on('connection', function (socket) {
    console.log('connection:',	socket.id);
    if (users.length > 2) {
        socket.emit('full', 'The room is full');
        socket.disconnect();
    }

    var user = {
        id: socket.id,
        x: 0,
        y: 0,
    }

    users.push(user);
    console.log(users);
    io.emit('newUser', users);

	socket.on('move', moveMsg);
	function moveMsg(data) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == data.id) {
                users[i].x = data.x;
                users[i].y = data.y;
            }
        }
        io.emit('move', users)
	}

    socket.on('disconnect', function () {
        console.log('disconnection:',	socket.id);
        users.forEach(user => {
            if (user.id == socket.id) {
                users.splice(users.indexOf(user), 1)
            }
        });
        io.emit('lostUser', users)
        console.log(users)
    });
});