const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { auth, admin } = require('../middleware/auth');


router.get('/', itemController.getAll);


router.post('/', [auth, admin], itemController.create);
router.put('/:id', [auth, admin], itemController.update);
router.delete('/:id', [auth, admin], itemController.delete);

module.exports = router;