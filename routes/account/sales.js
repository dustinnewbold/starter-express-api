const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const newCustomers = Math.floor(Math.random() * (80 - 30 + 1) + 30);

    res.json({
        customers: {
            new: {
                number: newCustomers,
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
