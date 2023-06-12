const express = require('express')
const router = express.Router()
const user = require('./user')
const campaign = require('./campaign')
const category = require('./category')
const donation = require('./donation')
const image = require('./image')
const customer = require('./customer')
const status = require('./status')
const authentification = require('../middleware/authentification')

router.use(customer)
router.use(user)
router.use(authentification)
router.use(category)
router.use(campaign)
router.use(status)
router.use(donation)
router.use(image)


module.exports = router