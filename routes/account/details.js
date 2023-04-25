const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: "Henry's Bike Shop",
        coverImage: "/assets/images/company-bg.png",

        address: {
            street: "2007 Bloor St W",
            city: "Toronto",
            state: "ON",
            postal: "M6S 1M5",
        },
        phone: "4167629119",
        email: "henrysbikes@hbs.ca",

        openDate: "May 2022",
        numEmployees: 5,
    });
});

module.exports = router;
