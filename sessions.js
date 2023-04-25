const sessions = {};
const usernames = {};

const addSession = username => {
    const existingSession = usernames[username];
    removeSession(existingSession);

    const randomID_A = (Math.random() + 20).toString(36).match(/[\w|\d]/g).join('');
    const randomID_B = (Math.random() + 20).toString(36).match(/[\w|\d]/g).join('');
    const randomID_C = (Date.now()).toString(36).match(/[\w|\d]/g).join('');

    const sessionID = randomID_A + randomID_B + randomID_C;
    sessions[sessionID] = {
        username,
        date: Date.now(),
    };

    usernames[username] = sessionID;

    return sessionID;
};

const isValid = (username, sessionID) => {
    const userSessionID = usernames[username];

    if ( ! userSessionID ) return false;
    if ( userSessionID === sessionID ) return true;

    return false;
};

const removeSession = (username, sessionID) => {
    if ( ! isValid(username, sessionID) ) return;

    delete sessions[sessionID];
    delete usernames[username];
};

const sessionManager = {
    addSession,
    removeSession,
    isValid,
    sessions,
};

module.exports = sessionManager;
