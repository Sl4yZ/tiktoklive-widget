import handleChat from './chat.js';
import handleError from './error.js';
import handleGift from './gift.js';
import handleQueues from './queue.js';

let messages_queue = [];
let last_message = '';
let last_message_timestamp = 0;

export default async function StartEventHandler(io, tiktokChatConnection) {
    handleQueues(tiktokChatConnection, messages_queue, last_message, last_message_timestamp);

    tiktokChatConnection.on('error', err => handleError(err));

    tiktokChatConnection.on('gift', data => handleGift(io, data));

    tiktokChatConnection.on('chat', data => handleChat(messages_queue, data,  last_message, last_message_timestamp));
    //TODO : Alerts follow
}
