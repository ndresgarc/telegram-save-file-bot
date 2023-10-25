export function isAllowedUser(userIds, userId) {
    return userIds.includes(userId);
}

export function getHandler(message) {

    if (message.photo && message.photo.length > 0) {
        return "photo";
    }

    if (message.document) {
        return "document";
    }

    if (message.video) {
        return "video";
    }

    if (message.voice) {
        return "voice";
    }

    if (message.location) {
        return "location";
    }

    if (message.text) {
        return "text";
    }

    return false;

}

export const loadConfig = () => {
    return {
        token: process.env.TELEGRAM_BOT_TOKEN,
        users: process.env.ALLOWED_USERS.split(',').map((user) => {
            return {
                name: user.split(':')[0],
                id: user.split(':')[1]
            }
        })
    };
}

export const getUsersIds = (config) => {
    return config.users.map(user => +user.id);
}