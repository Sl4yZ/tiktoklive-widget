import { WebcastPushConnection } from 'tiktok-live-connector';
import { log, readJSON } from './utils.js';

const config = await readJSON('./config.json');

function initTikTokChatConnection() {
    return new WebcastPushConnection(config.app.tiktokUsername, {
        processInitialData: false,
        enableWebsocketUpgrade: true,
        clientParams: {
            app_language: config.app.clientLocale,
            device_platform: 'web',
        },
    });
}

export function checkAlive() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            let connection = initTikTokChatConnection();
            connection.connect().catch(err => {
                if (err.toString().includes('Already connected')) resolve();
                log('[❌]: The stream has ended.', err);
                reject();
            });
        }, 10000);
    });
}

export default async function StartChatConnection(io, port) {
    return new Promise(function (resolve, reject) {
        let connection = initTikTokChatConnection();
        connection
            .connect()
            .then(state => {
                log(`[✅]: Connected to roomId ${state.roomId} !`);
                log('[💡]: Your widget is available at ' + config.app.widgetURI + ':' + port);
                //io.emit('update_duration', process.env.TOAST_DURATION);
                resolve(connection);
            })
            .catch(err => {
                reject(err);
            });
    });
}
