#! /usr/bin/env node

const fs = require('fs');

import { isAllowedUser, getMessageType } from './utils';

const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

let config = {
    saveFolder: process.env.SAVE_FOLDER,
    token: process.env.TELEGRAM_BOT_TOKEN,
    users: process.env.ALLOWED_USERS.split(',').map((user) => {
        return {
            name: user.split(':')[0],
            id: user.split(':')[1]
        }
    })
};

const bot = new TelegramBot(config.token, {polling: true});
const userIds = config.users.map(user => +user.id);

console.log(userIds);

bot.on('message', function(msg){

    console.log(msg);

    console.log(getHandler(msg));

    console.log(isAllowedUser(userIds, msg.chat.id));

    if (isAllowedUser(userIds, msg.chat.id)) {

        if (msg.photo && msg.photo.length > 0) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var photoObject = msg.photo[msg.photo.length - 1];
            var photoId = photoObject.file_id;
            bot.downloadFile(photoId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.document) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var documentId = msg.document.file_id;
            bot.downloadFile(documentId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.video) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var videoId = msg.video.file_id;
            bot.downloadFile(videoId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.voice) {
            bot.sendMessage(msg.chat.id, 'Procesing...');
            var voiceId = msg.voice.file_id;
            bot.downloadFile(voiceId, config.saveFolder).then(()=>{
                bot.sendMessage(msg.chat.id, 'Done!');
            });
        }

        if (msg.location) {
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
        }

        bot.sendMessage(msg.chat.id, 'Hello, ' + msg.from.first_name + '!');

    } else {
        console.log("Not allowed user");
    }

});

bot.on("polling_error", console.log);