#! /usr/bin/env node

import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

import { 
    getHandler,
    getUsersIds,
    isAllowedUser, 
    loadConfig 
} from './utils.js';

import { handlers } from './handlers/index.js';

dotenv.config();
let config = loadConfig();
const bot = new TelegramBot( config.token, { polling: true });

bot.on('message', function(msg){

    console.log(msg);

    console.log(getHandler(msg));

    console.log(isAllowedUser(getUsersIds(config), msg.chat.id));

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