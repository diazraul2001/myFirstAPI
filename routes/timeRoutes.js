const express = require('express');
const router = express.Router();

const timeController = require('../controllers/timeController');
router.get('/EJ1', timeController.ej1);
router.get('/EJ2', timeController.ej2);
router.get('/EJ3', timeController.ej3);
module.exports = router;