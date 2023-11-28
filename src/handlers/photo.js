export const photo = (msg, bot, config) => {
    console.log('photo handler');
        bot.sendMessage(msg.chat.id, 'Procesing...');
        var photoObject = msg.photo[msg.photo.length - 1];
        var photoId = photoObject.file_id;
        bot.downloadFile(photoId, config.saveFolder).then(()=>{
            bot.sendMessage(msg.chat.id, 'Done!');
        });
};