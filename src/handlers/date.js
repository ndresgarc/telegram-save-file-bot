export const date = (msg, bot, config) => {
    console.log('date handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');

    let dateWrapper = msg.text;
    let dateMessage = dateWrapper.split('date:')[0];

    fs.appendFile(`${config.saveFolder}/date.txt`, dateMessage, (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });
    bot.sendMessage(msg.chat.id, 'Done!');

};