const express = require('express')
const ImageController = require('../controller/imageController')
const router = express.Router()

router.get('/donation', ImageController.allImage)
router.get('/donation/:id', ImageController.imageById)

router.post('/donation', ImageController.addImage)

router.delete('/donation/:id', ImageController.deleteImage)

module.exports = router