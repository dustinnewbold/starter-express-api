const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const change = Math.floor(Math.random() * (30 - 5 + 1) + 5);

    res.json({
        change,
        action: {
            description: "Henry is pre-approved for a $15,000 SMB loan",
            link: "https://www.example.com"
        },
    });
});

module.exports = router;
