import { log } from "../utils.js";

function handleGift(io, data) {
	 // preventing duplicate gift messages
	 if (!data.repeatEnd) return;
	 log('[🎁]: User `' + data.uniqueId + '` has sent x' + data.repeatCount + ' `' + data.giftName + '` !');
	 io.emit('gift', data);
}

export default handleGift