const express = require('express')
const CategoryController = require('../controller/CategoryController')
const router = express.Router()

router.get('/category', CategoryController.allCategory)
router.post('/category', CategoryController.addCategory)

router.delete('/category/:id', CategoryController.deleteCategory)

module.exports = router