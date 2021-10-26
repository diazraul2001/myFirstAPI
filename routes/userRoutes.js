const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
router.get('/list', userController.list);
router.get('/profile/:userId', userController.profile);
//router.get('/EJ1', userController.ej1);
module.exports = router;