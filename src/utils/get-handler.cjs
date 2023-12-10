module.exports = (message) => {

    if ( message.contact) {
        return "contact";
    }

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

    if (message.sticker) {
        return "sticker";
    }

    if (message.text) {
        return "text";
    }

    console.log("No handler found");
    return false;

}