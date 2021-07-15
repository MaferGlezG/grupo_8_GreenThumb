const express = require('express');
const router = express.Router();


const userLoadController = require('../controllers/userLoadController');

router.get('/edicion', userLoadController.edicion);

module.exports = router;