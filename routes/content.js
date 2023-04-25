const express = require('express');
const router = express.Router();
const cms = require('../content.json');

const getContent = path => {
    const content = cms[path];

    if ( ! content ) return null;

    return content;
};

router.get('/', (req, res) => {
    const content = getContent('/');
    if ( ! content ) {
        res.sendStatus(404);
        return;
    }

    res.json(content);
});

router.get('/:path', (req, res) => {
    const path = req.params['path'];
    const content = getContent(path);
    if ( ! content ) {
        res.sendStatus(404);
        return;
    }

    res.json(content);
});

module.exports = router;
