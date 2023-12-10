#! /usr/bin/env node

import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

import getHandler from './utils/get-handler.cjs';
import getUsersIds from './utils/get-user-ids.cjs';
import isAllowedUser from './utils/is-allowed-user.cjs';
import loadConfig from './utils/load-config.cjs';

import { handlers } from './handlers/index.js';

dotenv.config();
let config = loadConfig();
const bot = new TelegramBot( config.token, { polling: true });

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