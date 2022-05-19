import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

async function sendAlert(data) {
    Toastify({
        position: 'center',
        avatar: data.image,
        text: data.message,
        gravity: 'bottom',
        offset: {
            y: '50vh',
        },
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
            height: 'auto',
            fontSize: '40px',
        },
        duration: 10000,
    }).showToast();
}

function dispatchEvents(queue) {
    const event = queue.shift();
    if (undefined !== event || ('string' === typeof event && '' !== event.trim())) {
        //log(event.data);
        switch (event.type) {
            case 'message':
                sendAlert({
                    message: event.data.comment,
                    //image: event.data.profilePictureUrl
                });
                break;
            case 'gift':
                sendAlert({
                    message: 'Merci à ' + event.data.nickname + ' pour les ' + event.data.repeatCount + ' ' + event.data.giftName + ' !',
                    image: event.data.giftPictureUrl,
                });
                break;
        }
    }
}

export default function Client() {
    let queue = [];
    let audio = new Audio('./sound.mp3');
    audio.autoplay = false;

    const socket = io();

    socket.on('connect', () => {
        console.log('Waiting for events...');
    });

    socket.on('update_duration', data => {
        // _duration = data;
    });

    socket.on('message', data => {
        queue.push({ type: 'message', data: data });
    });
    socket.on('gift', data => {
        audio.play();
        queue.push({ type: 'gift', data: data });
    });

    setInterval(() => {
        dispatchEvents(queue);
    }, 300);
}

// {
// 	giftId: 5655,
// 	repeatCount: 127,
// 	repeatEnd: true,
// 	userId: '6763453048813077509',
// 	uniqueId: 'applefugeur',
// 	nickname: 'appele fugeur',
// 	profilePictureUrl: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ab4792a76d862d6e946ee25455797753~c5_100x100.jpeg?x-expires=1652994000&x-signature=aF9nqYT9t%2B0jq1s1lyN5PcR%2Blw0%3D',
// 	followRole: 0,
// 	userBadges: [],
// 	gift: { gift_id: 5655, repeat_count: 127, repeat_end: 1, gift_type: 1 },
// 	describe: 'Sent Rose',
// 	giftType: 1,
// 	diamondCount: 1,
// 	giftName: 'Rose',
// 	giftPictureUrl: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png',
// 	timestamp: 1652823136978,
// 	receiverUserId: '6629262706686754822'
//   }
