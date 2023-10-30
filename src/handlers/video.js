export const video = (msg, bot, config) => {
    console.log('video handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var videoId = msg.video.file_id;
    bot.downloadFile(videoId, config.saveFolder).then(()=>{
        bot.sendMessage(msg.chat.id, 'Done!');
    });
};