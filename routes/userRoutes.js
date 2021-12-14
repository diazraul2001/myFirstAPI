const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const joiMiddleware =require('../middlewares/joiMiddleware');
const userSchema = require('../models/joi/userSchema');
router.get('/list', userController.list);
router.get('/profile/:userId', userController.profile);
router.post('/create',
 joiMiddleware.validate(userSchema.createUserSchema,'body'), userController.create);
//router.get('/EJ1', userController.ej1);
module.exports = router;