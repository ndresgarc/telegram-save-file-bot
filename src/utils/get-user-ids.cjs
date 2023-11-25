module.exports = ( config ) => {

    return config.users.map(user => +user.id);

};