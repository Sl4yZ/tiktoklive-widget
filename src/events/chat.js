import { log, readJSON } from '../utils.js';

const config = await readJSON('./config.json');
const commands = Object.keys(config.commands).map(key => [String(key), config.commands[key]]);

function addMessageToQueue(messages_queue, command, last_message, last_message_timestamp) {
    if (last_message == command[1].message && Date.now() <= last_message_timestamp + 20000) {
        log('[🤖]: Ignored command `' + command[0] + '`');
        return;
    }
    messages_queue.push(command[1].message);
}

function viewerIsModerator(data) {
    if (data.some(badges => badges.name === 'Moderator')) return true;
    return false;
}

function handleChat(messages_queue, data, last_message, last_message_timestamp) {
    if (data.comment[0] === '!') {
        log('[🤖]: Command `' + data.comment + '` received from `' + data.uniqueId + '`');
        commands.map(command => {
            if (data.comment.toLowerCase() === command[0])
                if (command[1].moderatorsOnly) {
                    if (viewerIsModerator(data)) {
                        addMessageToQueue(messages_queue, command, last_message, last_message_timestamp);
                        return;
                    }
                    return;
                } else {
                    addMessageToQueue(messages_queue, command, last_message, last_message_timestamp);
                    return;
                }
        });
    }
}

export default handleChat;
