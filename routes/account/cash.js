const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        months: [
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
        ],
        cashFlow: [
            17552,
            20212,
            16281,
            15719,
            17482,
            14819,
            14721,
            12481,
            12801,
            13815,
            15671,
            18710,
        ],
    });
});

module.exports = router;
