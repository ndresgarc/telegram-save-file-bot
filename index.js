const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

let config = {
    saveFolder: process.env.SAVE_FOLDER,
    token: process.env.TELEGRAM_BOT_TOKEN,
    users: process.env.ALLOWED_USERS.split(',').map((user) => {
        return {
            name: user.split(':')[0],
            id: user.split(':')[1]
        }
    })
};

const bot = new TelegramBot(config.token, {polling: true});
const userIds = config.users.map(user => +user.id);

console.log(userIds);

bot.on('message', function(msg){

    console.log(msg);

    if (userIds.includes(msg.chat.id)) {

        if (msg.photo && msg.photo.length > 0) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var photoObject = msg.photo[msg.photo.length - 1];
            var photoId = photoObject.file_id;
            bot.downloadFile(photoId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.document) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var documentId = msg.document.file_id;
            bot.downloadFile(documentId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.video) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var videoId = msg.video.file_id;
            bot.downloadFile(videoId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        bot.sendMessage(msg.chat.id, 'Hello, ' + msg.from.first_name + '!');

    } else {
        console.log("Not allowed user");
    }

});

bot.on("polling_error", console.log);