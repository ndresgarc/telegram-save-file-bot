export const text = (msg, bot, config) => {
    console.log('text handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    bot.sendMessage(msg.chat.id, 'Done!');
};