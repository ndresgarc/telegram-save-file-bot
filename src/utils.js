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

    return false;

}
  
export function isAllowedUser(userIds, userId) {
    return userIds.includes(userId);
}