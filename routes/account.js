const express = require('express');
const router = express.Router();

const middlewareAuth = require('../middleware-auth');
const detailsRoute = require('./account/details');
const cashRoute = require('./account/cash');
const devicesRoute = require('./account/devices');
const insightsRoute = require('./account/insights');
const quarterRoute = require('./account/quarter');
const salesRoute = require('./account/sales');
const trendsRoute = require('./account/trends');

router.use(middlewareAuth);

router.use('/details', detailsRoute);
router.use('/cash', cashRoute);
router.use('/devices', devicesRoute);
router.use('/insights', insightsRoute);
router.use('/quarter', quarterRoute);
router.use('/sales', salesRoute);
router.use('/trends', trendsRoute);

module.exports = router;