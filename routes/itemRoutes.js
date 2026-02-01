const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { auth, admin } = require('../middleware/auth');

// Публичный доступ: любой может смотреть [cite: 21]
router.get('/', itemController.getAll);

// Защищенный доступ: только админ может создавать, менять и удалять [cite: 23, 24]
router.post('/', [auth, admin], itemController.create);
router.put('/:id', [auth, admin], itemController.update);
router.delete('/:id', [auth, admin], itemController.delete);

module.exports = router;