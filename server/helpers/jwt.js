const jwt = require('jsonwebtoken')
const secret = 'rahasia'
const encodedToken = (payload) => {
    return jwt.sign(payload, secret)
}
const decodedToken = (token) => {
    return jwt.verify(token, secret)
}
module.exports = { encodedToken, decodedToken }