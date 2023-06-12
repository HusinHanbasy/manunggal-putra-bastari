const express = require('express')
const statusController = require('../controller/statusController')
const router = express.Router()

router.get('/status', statusController.allStatus)
router.post('/status', statusController.addStatus)

router.delete('/status/:id', statusController.deleteStatus)

module.exports = router