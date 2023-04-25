const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        change: 14,
        action: {
            description: "Henry is pre-approved for a $15,000 SMB loan",
            link: "https://www.example.com"
        },
    });
});

module.exports = router;
