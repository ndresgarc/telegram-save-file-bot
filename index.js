const TelegramBot = require('node-telegram-bot-api');
const token = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // Not a real token
const bot = new TelegramBot(token, {polling: true});
const MY_ID = 000000000000001; // Not my real ID

/* CONFIG */
var config = {
    saveFolder: 'C:\\users\\<my-username>\\Documents'
};

bot.on('message', function(msg){
    
    if (msg.chat.id != MY_ID) return false;

    bot.sendMessage(chatId, 'Procesing...');

    if (msg.photo.length > 0) {
        var photoObject = msg.photo[msg.photo.length - 1];
        var photoId = photoObject.file_id;
        bot.downloadFile(photoId, config.saveFolder);
    }

});