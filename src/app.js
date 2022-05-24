import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';

import { createServer } from 'http';
import { exit } from 'process';
import { Server } from 'socket.io';
import StartChatConnection, { checkAlive } from './connection.js';
import StartEventHandler from './events/eventHandler.js';
import { log, readJSON } from './utils.js';

const config = await readJSON('./config.json');
let port = 0;

//Init Http Server
const app = express();
let connected = false;

app.use(express.static('public'));

//Init SocketIO Server through Http
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: [config.app.widgetURI],
    },
});

if (process.env.PORT === undefined || process.env.PORT === '') port = config.app.port;
else port = process.env.PORT;

if (port === undefined || port === '') {
    log('[❌]: The environment variable PORT is undefined.');
    exit(84);
}

try {
    httpServer.listen(port);
} catch {
    log('[❌]: The port ' + port + ' seems to be already used');
    exit(84);
} finally {
    log('[✅]: Server started on port ' + port);
}

let init = async () => {
    await StartChatConnection(io, port)
        .then(connection => {
            StartEventHandler(io, connection);
        })
        .then(() => {
            connected = true;
            checkAlive().catch(() => (connected = false));
        })
        .catch(err => {
            connected = false;
            log('[❌]: ' + err);
        });
};

init();

// If livestream is not online when the app starts, keep trying to connect.
setInterval(async () => {
    if (!connected) {
        init();
    }
}, 10000);
