const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        tip: "Your stationary devices are consistently being used less while mobile systems are increasing. Consider a device switch.",
        devices: [
            {
                name: "Front counter",
                type: "Station Duo",
                image: "/assets/images/device-1.png",
                active: true,
                topPerformer: false,
                transactions: {
                    last30days: 132,
                    avgMonthly: 120,
                },
            },
            {
                name: "Service counter",
                type: "Station Duo",
                image: "/assets/images/device-2.png",
                active: true,
                topPerformer: true,
                transactions: {
                    last30days: 151,
                    avgMonthly: 142,
                },
            },
            {
                name: "Shop floor",
                type: "Station Duo",
                image: "/assets/images/device-3.png",
                active: true,
                topPerformer: false,
                transactions: {
                    last30days: 118,
                    avgMonthly: 121,
                },
            },
            {
                name: "Express service",
                type: "Station Duo",
                image: "/assets/images/device-4.png",
                active: true,
                topPerformer: false,
                transactions: {
                    last30days: 106,
                    avgMonthly: 98,
                },
            },
            {
                name: "Inactive Device",
                type: "Station Duo",
                image: "/assets/images/device-1.png",
                active: false,
                topPerformer: false,
                transactions: {
                    last30days: 0,
                    avgMonthly: 4,
                },
            },
        ]
    });
});

module.exports = router;
