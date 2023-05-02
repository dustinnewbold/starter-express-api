const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const openYear = Math.floor(Math.random() * (2022 - 2000 + 1) + 2000);

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

        openDate: `May ${openYear}`,
        numEmployees: 5,
    });
});

module.exports = router;
