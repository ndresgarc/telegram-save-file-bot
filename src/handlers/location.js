import fs from 'fs';

export const location = (msg, bot, config) => {
    console.log('location handler');
    bot.sendMessage(msg.chat.id, 'Procesing...');
    var location = msg.location;
    fs.writeFile(`${config.saveFolder}/location-${msg.from.username}-${Date.now()}.json`, JSON.stringify(location, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });
    bot.sendMessage(msg.chat.id, 'Done!');
};