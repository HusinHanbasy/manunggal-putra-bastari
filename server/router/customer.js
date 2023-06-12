const express = require('express')
const Controller = require('../controller/customerController')
const router = express.Router()

router.post('/pub/register', Controller.registerUser)
router.post('/pub/login', Controller.loginUser)

router.get('/pub/campaign', Controller.allCampaign)
router.get('/pub/campaign/:id', Controller.campaignById)

router.get('/pub/category', Controller.allCategory)

router.get('/pub/status', Controller.allStatus)

router.get('/pub/image', Controller.allImage)

router.get('/pub/donation', Controller.allDonation)
router.post('/pub/donation', Controller.addDonation)



module.exports = router