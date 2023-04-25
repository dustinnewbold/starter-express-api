const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        customers: {
            new: {
                number: 36,
                percentile: 43,
            },
            returning: {
                number: 114,
                percentile: 57,
            },
        },
        sales: {
            online: {
                percentile: 57,
            },
            inPerson: {
                percentile: 43,
            },
        },
        transactions: {
            value: "19.62",
            change: 6,
        },
        tip: "A promotion on outdoor clothing could help improve avg value"
    });
});

module.exports = router;
