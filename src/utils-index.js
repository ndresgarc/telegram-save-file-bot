import getHandlerRequire from './utils.cjs';

export const getHandler = getHandlerRequire;


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


export function isAllowedUser(userIds, userId) {
    return userIds.includes(userId);
}
