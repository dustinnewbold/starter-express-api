const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        competitors: [
            {
                title: "I have SPOKE",
                openDate: "May 2022",
                numEmployees: 5,

                rating: {
                    score: "4.2",
                    reviews: 146,
                },
            },
            {
                title: "Pedal to a Medal",
                openDate: "Feb 2018",
                numEmployees: 42,

                rating: {
                    score: "4.8",
                    reviews: 1524,
                },
            },
            {
                title: "Bike Shop",
                openDate: "Aug 2019",
                numEmployees: 2,

                rating: {
                    score: "3.7",
                    reviews: 17,
                },
            },
        ]
    });
});

module.exports = router;
