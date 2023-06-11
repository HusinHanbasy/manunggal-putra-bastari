const express = require('express')
const CampaignController = require('../controller/campaignController')
const router = express.Router()

router.get('/campaign', CampaignController.allCampaign)
router.get('/campaign/:id', CampaignController.campaignById)

router.post('/campaign', CampaignController.addCampaign)
router.put('/campaign/:id', CampaignController.editCampaign)

router.delete('/campaign/:id', CampaignController.deleteCampaign)

module.exports = router