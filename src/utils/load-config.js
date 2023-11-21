module.exports = () => {
    return {
        token: process.env.TELEGRAM_BOT_TOKEN,
        users: process.env.ALLOWED_USERS.split(',').map((user) => {
            return {
                name: user.split(':')[0],
                id: user.split(':')[1]
            }
        })
    };
};