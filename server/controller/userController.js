const { comparePassword } = require('../helpers/bcrypt')
const { encodedToken } = require('../helpers/jwt')
const { User } = require('../models')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('338073874974-rrups1f7nt5urgppren0eiunnvhlm6hk.apps.googleusercontent.com');

class UserController {
    static async allUser(req, res, next) {
        try {
            const user = await User.findAll()
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
    static async register(req, res, next) {
        try {
            const { username, email, password, phone } = req.body
            const user = await User.create({ username, email, password, status: "Donatur", phone })
            res.status(201).json({ id: user.id, email: user.email })
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw { name: "InvalidLogin" }
            } else {
                const isValid = comparePassword(password, user.password)
                if (!isValid) {
                    throw { name: "InvalidLogin" }
                } else {
                    const access_token = encodedToken({
                        id: user.id
                    })
                    res.status(200).json({ access_token, username: user.name, status: user.status })
                }
            }

        } catch (error) {
            next(error)
        }
    }
    static async googleLogin(req, res, next) {
        try {
            const token = req.headers["google-auth-token"]
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: '338073874974-rrups1f7nt5urgppren0eiunnvhlm6hk.apps.googleusercontent.com',
            });
            const payload = ticket.getPayload();
            const { email, name } = payload

            let [user, created] = await User.findOrCreate({
                where: {
                    email
                },
                defaults: {
                    username: name,
                    email: email,
                    password: String(Math.random()),
                    phone: String(Math.random()),
                    status: "Donatur"
                }
            })
            let message, code;
            if (created) {
                message = `customer with email ${email} has been created`
                code = 201
            } else {
                message = `customer with email ${email} has been Found`
                code = 200
            }
            const access_token = encodedToken({
                id: User.id
            })
            res.status(code).json({ message, access_token, username: user.username, status: user.status })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController