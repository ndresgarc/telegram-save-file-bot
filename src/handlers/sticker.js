export const sticker = (msg, bot, config) => {
    console.log('sticker handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var sticker = msg.sticker;
    bot.getFileLink(sticker.file_id).then((link) => {
        console.log(link);
        bot.sendMessage(msg.chat.id, 'Done!');
    });
}