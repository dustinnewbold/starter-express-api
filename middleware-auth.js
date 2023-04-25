const express = require('express');
const router = express.Router();

const sessionManager = require('./sessions');

router.all('*', (req, res, next) => {
    const authKey = req.headers['authorization'];

    if ( ! authKey ) {
        res.sendStatus(401);
        return;
    }

    const authSplit = authKey.split(':');
    const valid = sessionManager.isValid(authSplit[0], authSplit[1]);

    if ( ! valid ) {
        res.sendStatus(401);
        return;
    }

    next();
});

module.exports = router;
