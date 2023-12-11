bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [
                ["Commands", "History"],   
                ["Files list"],
                ["Add user?", "Remove user?"]
            ]
        }
    });
    
});