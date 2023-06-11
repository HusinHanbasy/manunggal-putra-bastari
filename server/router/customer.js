const express = require('express')
const Controller = require('../controller/customerController')
const router = express.Router()

router.post('/pub/register', Controller.registerUser)
router.post('/pub/login', Controller.loginUser)

router.get('/pub/campaign', Controller.allCampaign)
router.get('/pub/campaign/:id', Controller.campaignById)



module.exports = router