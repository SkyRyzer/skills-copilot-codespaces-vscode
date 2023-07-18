// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create routes
router.get('/', commentController.index);
router.get('/create', commentController.create);
router.get('/:id', commentController.show);
router.post('/store', commentController.store);
router.get('/:id/edit', commentController.edit);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.destroy);

// Export routes
module.exports = router;