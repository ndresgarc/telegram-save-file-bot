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

bot.on('message', function(msg) {

    if (isAllowedUser(getUsersIds(config), msg.chat.id)) {
        const handler = getHandler(msg);
        handlers[handler](msg, bot, config);
    } else {
        console.log("User not allowed");
    }

});

bot.on("polling_error", console.log);