const { decodedToken } = require("../helpers/jwt")
const { User } = require('../models')

async function authentification(req, res, next) {
    try {
        let { access_token } = req.headers
        if (!access_token) {
            throw { name: "Unauthentificated" }
        }
        let payload = decodedToken(access_token)
        let user = await User.findByPk(payload.id)
        if (!user) {
            throw { name: "Unauthentificated" }
        }
        req.user = {
            id: user.id
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = authentification