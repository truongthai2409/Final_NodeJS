const express = require('express');
const router = express.Router();
const loginRouter = require('../controllers/LoginControllor');

router.get('/login', loginRouter.index);

module.exports = router;