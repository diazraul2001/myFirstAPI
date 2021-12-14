const express = require('express');
const router = express.Router();

const ex1S07Controller = require('../controllers/ex1s07Controller.js');
router.get('get', ex1S07Controller.get);
const ex1S07Controller = require('../controllers/ex1s07Controller.js');
router.get('add', ex1S07Controller.add);
module.exports = router;
const ex1S07Controller = require('../controllers/ex1s07Controller.js');
router.get('delete', ex1S07Controller.delete);
const ex1S07Controller = require('../controllers/ex1s07Controller.js');
router.get('modify', ex1S07Controller.modify);
module.exports = router;