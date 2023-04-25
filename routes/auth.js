const express = require('express');
const router = express.Router();

const sessionManager = require('../sessions');

router.post('/', (req, res) => {
    const username = req.body?.username;
    const password = req.body?.password;

    if ( ! username || ! password ) {
        res.sendStatus(400);
        return;
    }

    const sessionID = sessionManager.addSession(username);

    res.json({
        sessionID,
    });
});

router.post('/signout', (req, res) => {
    const authHeader = req.headers['authorization'];
    const authHeaderSplit = authHeader.split(':');

    const username = authHeaderSplit[0];
    const sessionID = authHeaderSplit[1];

    sessionManager.removeSession(username, sessionID);

    res.sendStatus(201);
});


module.exports = router;
