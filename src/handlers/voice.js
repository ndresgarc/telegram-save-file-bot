export const voice = (msg, bot, config) => {
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var voiceId = msg.voice.file_id;
    bot.downloadFile(voiceId, config.saveFolder).then(()=>{
        bot.sendMessage(msg.chat.id, 'Done!');
    });

    // TODO: Convert voice to text and save it to a file

};