const express = require('express')
const router = express.Router()
const user = require('./user')
const campaign = require('./campaign')
const category = require('./category')
const donation = require('./donation')
const image = require('./image')
const customer = require('./customer')

router.use(user)
router.use(campaign)
router.use(category)
router.use(donation)
router.use(image)
router.use(customer)

module.exports = router