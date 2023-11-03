const express = require('express');
const protect = require('../authMiddleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect);

module.exports = router;