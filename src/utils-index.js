import getHandlerRequire from './utils.cjs';

import loadConfigRequired from './utils/load-config';

export const getHandler = getHandlerRequire;

export const loadConfig = loadConfigRequired;


export const getUsersIds = (config) => {
    return config.users.map(user => +user.id);

}


export function isAllowedUser(userIds, userId) {
    return userIds.includes(userId);
}
