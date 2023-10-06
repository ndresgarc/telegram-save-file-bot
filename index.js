const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
const config = require('./config.json');
const userIds = config.users.map(user => user.id);

bot.on('message', function(msg){

    console.log(msg);

    if (userIds.includes(msg.chat.id)) {

        if (msg.photo.length > 0) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var photoObject = msg.photo[msg.photo.length - 1];
            var photoId = photoObject.file_id;
            bot.downloadFile(photoId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

    } else {
        console.log("Not allowed user");
    }

});

bot.on("polling_error", console.log);