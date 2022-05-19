import fs from 'fs';

function log(msg) {
	console.log('[' + new Date().toLocaleTimeString() + ']' + msg)
}

async function readJSON(path) {
    return new Promise(function (resolve, reject) {
        var obj;
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            obj = JSON.parse(data);
            resolve(obj);
        });
    });
}
export { readJSON, log };
