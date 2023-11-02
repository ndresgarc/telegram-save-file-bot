export const date = (msg, bot, config) => {
    console.log('date handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');

};