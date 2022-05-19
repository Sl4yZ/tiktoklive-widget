import { WebcastPushConnection } from 'tiktok-live-connector';
import { exit } from 'process';
import { log } from './utils.js';

function initTikTokChatConnection() {
    return new WebcastPushConnection(process.env.TIKTOK_USERNAME, {
        processInitialData: false,
        enableWebsocketUpgrade: true,
        //requestPollingIntervalMs: 2000,
        clientParams: {
            app_language: process.env.CLIENT_LOCALE,
            device_platform: 'web',
        },
    });
}

export function checkAlive() {
    setInterval(() => {
        let connection = initTikTokChatConnection();
        connection.connect().catch(err => {
            if (err.toString().includes('Already connected')) return;
            log('[❌]: The stream has ended.', err);
            exit(0);
        });
    }, 2000);
}

export default async function StartChatConnection(io) {
    return new Promise(function (resolve, reject) {
        let connection = initTikTokChatConnection();
        connection
            .connect()
            .then(state => {
                log(`[✅]: Connected to roomId ${state.roomId} !`);
                log('[💡]: Your widget is available at ' + process.env.WIDGET_URI + ':' + process.env.PORT);
                io.emit('update_duration', process.env.TOAST_DURATION);
                resolve(connection);
            })
            .catch(err => {
                reject(err);
            });
    });
}
