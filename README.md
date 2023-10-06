# telegram-save-file-bot

A Node.js Telegram Bot to process and save the photos that receives and store them in a configurable folder.
It verifies Telegram user ID is in a whitelist before accepting the photo.

## Install
```
git clone https://github.com/ndresgarc/telegram-save-file-bot.git
npm install
```

## Generate Telegram Bot token
https://core.telegram.org/bots/api#authorizing-your-bot

## Get your telegram ID
Using https://t.me/userinfobot from a Telegram client

## Notes
The bot process can be closed. Next time it runs it will process all the pending messages.
This bot it's supposed to be executed from a machine that can access the destination folder and with an user that has the proper permissions to write on it.

## Changelog

### v0.1.1
- Added .env file configuration

### v0.1.0 (init)
- Basic functionality, only for photos