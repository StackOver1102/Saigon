const express = require('express');
const router = express.Router();
const foodController = require('../controllers/groupController');

router.post('/', foodController.createFood); 
router.get('/', foodController.getAllFood); 
router.get('/:id', foodController.getFoodById); 
router.put('/:id', foodController.updateFood); 
router.delete('/:id', foodController.deleteFood); 

module.exports = router;
