const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const randomMonthIndex = Math.floor(Math.random() * (months.length + 1));

    const month = months[randomMonthIndex] || months[0];

    res.json([
        {
            title: `${month} is historically their busiest month`,
            description: "Propose a SMB loan to buy extra inventory to accommodate for this",
            link: "https://www.example.com/insight-1",
        },
        {
            title: "Growth suggests they’ll need to hire a new employee",
            description: "Propose a SMB loan to buy extra inventory to accommodate for this",
            link: "https://www.example.com/insight-2",
        },
        {
            title: "Online sales are growing month-over-month",
            description: "They should consider upgrading their account",
            link: "https://www.example.com/insight-3",
        },
        {
            title: "They've had a great quarter",
            description: "They should consider investing / opening a high interest savings account",
            link: "https://www.example.com/insight-4",
        },
        {
            title: "USD sales are steadily increasing",
            description: "Recommend a USD chequing account to reduce fees and other costs",
            link: "https://www.example.com/insight-5",
        },
    ]);
});

module.exports = router;
