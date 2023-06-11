const express = require('express')
const DonationController = require('../controller/donationController')
const router = express.Router()

router.get('/donation', DonationController.allDonation)
router.post('/donation', DonationController.addDonation)

router.delete('/donation/:id', DonationController.deleteDonation)

module.exports = router