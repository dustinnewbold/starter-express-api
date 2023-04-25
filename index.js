const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const contentRoute = require('./routes/content');
const accountRoute = require('./routes/account');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json())

app.use('/auth', authRoute);
app.use('/content', contentRoute);
app.use('/account', accountRoute);

app.listen(process.env.PORT || 3000);
