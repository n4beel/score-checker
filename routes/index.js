const express = require('express');
const router = express.Router();

router.use('/check', require('./check'))

module.exports = router;