const express = require('express');
const router = express.Router();

const ex2S06Controller = require('../controllers/ex2S06Controller');
router.get('/EJ2', ex2S06Controller.ej2);
const middleware = require('../middlewares/mi-caja-fuerte');
router.get('/fact',
middleware.checkNumQueryInteger,ex2S06Controller.ej2
),
module.exports = router;
