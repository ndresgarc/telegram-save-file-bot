# telegram--save-file-bot

A Node.js Telegram Bot to process and save the messages that receives and store them in a configurable folder.
It verifies Telegram user ID before saving the file.

## Install
```
git clone https://github.com/ndresgarc/telegram-save-file-bot.git
npm install
```

## Generate Telegram Bot token
https://www.siteguarding.com/en/how-to-get-telegram-bot-api-token

## Get your telegram ID
https://support.bigone.com/hc/en-us/articles/360008014894-How-to-get-the-Telegram-user-ID-

## Notes
The bot process can be closed. Next time it runs it will process all the pending messages.

This bot it's supposed to be executed from a machine that can access the destination folder.

## Changelog

### 0.1.0 Init
- Basic functionality, only for photos