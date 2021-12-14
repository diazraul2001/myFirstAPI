const express = require('express');
const router = express.Router();


const ex1S06Controller = require('../controllers/ex1S06Controller');
router.get('/EJ1', ex1S06Controller.ej1);
const middleware = require('../middlewares/exS06Middleware');
router.get('/fact',
middleware.checkNumQueryInteger,ex1S06Controller.ej1,
middleware.checkGreater,ex1S06Controller.ej1
),

module.exports = router;