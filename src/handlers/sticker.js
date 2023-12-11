export const sticker = (msg, bot, config) => {
    console.log('sticker handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var sticker = msg.sticker;

    bot.downloadFile(sticker.file_id, './stickers').then((path) => {
        console.log(path);
        bot.sendMessage(msg.chat.id, 'Done!');
    });

    /* Add as image metadata */
    /*
    bot.getFileLink(sticker.file_id).then((link) => {
        console.log(link);
        bot.sendMessage(msg.chat.id, 'Done!');
    });
    */
}