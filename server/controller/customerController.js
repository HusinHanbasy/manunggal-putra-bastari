const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User, Campaign, Category, Donation } = require('../models')
const { Op } = require('sequelize')

class CustomerController {
    static async registerUser(req, res, next) {
        try {
            const { username, email, password, phone } = req.body
            const user = await User.create({ username, email, password, status: "Donatur", phone })
            res.status(201).json({ id: user.id, email: user.email })
        } catch (error) {
            next(error)
        }
    }
    static async loginUser(req, res, next) {
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
    static async googleLoginUser(req, res, next) {
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
    static async allCampaign(req, res, next) {
        try {
            let { page, limit, search } = req.query
            limit = limit || 6
            let options = {
                include: [
                    { model: Category }
                ],
                limit
            }
            options.where = {
                name: {
                    [Op.iLike]: `%${search || ''}%`
                }
            }
            if (page) {
                options.offset = (page - 1) * limit
            }


            const campaign = await Campaign.findAndCountAll(options)
            res.status(200).json({ message: "success fetch Campaign", campaign })
        } catch (error) {
            next(error)
        }
    }
    static async campaignById(req, res, next) {
        try {
            const id = req.params.id
            const campaign = await Campaign.findByPk(id, { include: ["Category", "Donation"] })
            if (!campaign) {
                return res.status(404).json({ message: `Data Not Found` });
            }
            res.status(200).json({ campaign })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = CustomerController