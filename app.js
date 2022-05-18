require('dotenv').config();

const express = require('express');

const { createServer } = require('http');
const { exit } = require('process');
const { Server } = require('socket.io');

const { WebcastPushConnection } = require('tiktok-live-connector');

//Init Http Server
const app = express();
app.use(express.static('public'));

//Init SocketIO Server through Http
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: [process.env.WIDGET_URI],
    },
});

if (process.env.PORT === undefined || process.env.PORT === '') {
    console.log('❌ The environment variable PORT is undefined.');
    exit(84);
}
try {
    httpServer.listen(process.env.PORT);
} catch {
    console.log('❌ The port ' + process.env.PORT + 'is (maybe) already used');
    exit(84);
} finally {
    console.log('✅ Server started on port ' + process.env.PORT);
}

// Create a new wrapper object and pass the username
// Docs : https://www.npmjs.com/package/tiktok-live-connector
let tiktokChatConnection = new WebcastPushConnection(process.env.TIKTOK_USERNAME, {
    processInitialData: false,
    enableWebsocketUpgrade: true,
    //requestPollingIntervalMs: 2000,
    clientParams: {
        app_language: process.env.CLIENT_LOCALE,
        device_platform: 'web',
    },
});

// Connect to the chat (async can be used as well)
tiktokChatConnection
    .connect()
    .then(state => {
        console.info(`✅ Connected to roomId ${state.roomId} ! \n💡 Your widget is available at ` + process.env.WIDGET_URI + ':' + process.env.PORT);
        io.emit('update_duration', process.env.TOAST_DURATION);
    })
    .catch(err => {
        console.error('❌ Failed to connect: \n', err);
        exit(84);
    });

// And here we receive gifts sent to the streamer
tiktokChatConnection.on('gift', data => {
    io.emit('gift', data);
    //console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
});
