export const document = (msg, bot, config) => {
    console.log('document handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var documentId = msg.document.file_id;
    bot.downloadFile(documentId, config.saveFolder).then(()=>{
        bot.sendMessage(msg.chat.id, 'Done!');
    });
};