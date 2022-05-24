import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const delay = ms => new Promise(res => setTimeout(res, ms));
let audio = new Audio('./sounds/sound.mp3');
let duration = 6000;
let alertbox = document.getElementById('alertbox');
let name = document.getElementById('name');
let gift_count = document.getElementById('gift_count');
let gift_type = document.getElementById('gift_type');
let gift_icon = document.getElementById('gift_icon');

async function sendGiftAlert(data) {
    alertbox.hidden = false;
    alertbox.classList.add('fade-in-fwd');
    audio.play();
    gift_icon.src = data.giftPictureUrl;
    name.textContent = data.nickname;
    gift_count.textContent = 'x' + data.repeatCount;
    gift_type.textContent = data.giftName + '(s)';
    await delay(duration);
    alertbox.classList.remove('fade-in-fwd');
    alertbox.hidden = true;
    audio.pause();
    audio.currentTime = 0;
}

function dispatchEvents(queue) {
    const event = queue.shift();
    if (undefined !== event || ('string' === typeof event && '' !== event.trim())) {
        switch (event.type) {
            case 'gift':
                sendGiftAlert(event.data);
                break;
        }
    }
}

export default function Client() {
    let queue = [];
    const socket = io();

    socket.on('connect', () => {
        console.log('Waiting for events...');
        document.getElementById('alertbox').hidden = true;
    });

    socket.on('update_duration', data => {
        duration = data;
    });

    socket.on('message', data => {
        queue.push({ type: 'message', data: data });
    });
    socket.on('gift', data => {
        queue.push({ type: 'gift', data: data });
    });

    setInterval(() => {
        dispatchEvents(queue);
    }, duration + 1000);
}