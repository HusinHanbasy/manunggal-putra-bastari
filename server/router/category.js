const express = require('express')
const CategoryController = require('../controller/categoryController')
const router = express.Router()
const authentification = require('../middleware/authentification')

router.get('/category', CategoryController.allCategory)

router.use(authentification)
router.post('/category', CategoryController.addCategory)

router.delete('/category/:id', CategoryController.deleteCategory)

module.exports = router