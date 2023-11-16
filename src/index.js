#! /usr/bin/env node

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

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
    
});

bot.on('message', function(msg) {

    

    if (isAllowedUser(getUsersIds(config), msg.chat.id)) {
        const handler = getHandler(msg);

        console.log("Handler: ", handler);

        if (!handler) {
            console.log("Handler not found");
            return;
        }

        handlers[handler](msg, bot, config);
    
    } else {
        console.log("User not allowed");
    }

});

bot.on("polling_error", console.log);