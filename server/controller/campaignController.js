
const { Campaign, Image, Category, Status, History, User } = require('../models')

class CampaignController {
    static async allCampaign(req, res, next) {
        try {
            const campaign = await Campaign.findAll({
                include: [{
                    model: Category, attributes: ["name"]
                }, { model: Status, attributes: ["name"] }
                ]
            })
            res.status(200).json({ campaign })
        } catch (error) {
            next(error)
        }
    }
    static async allHistory(req, res, next) {
        try {
            const history = await History.findAll({
                include: [{
                    model: User, attributes: ["username"]
                }, { model: Campaign, attributes: ["title"] }
                ]
            })
            res.status(200).json({ history })
        } catch (error) {
            next(error)
        }
    }
    static async campaignById(req, res, next) {
        try {
            const id = req.params.id
            const data = await Campaign.findOne({
                where: {
                    id
                },
                include: [Category]
            })
            if (!data) {
                throw { name: "NotFound" }
            }
            res.status(200).json({ data })
        } catch (error) {
            next(error)
        }
    }
    static async addCampaign(req, res, next) {
        try {
            const UserId = req.user.id
            const { title, target, description, duration, StatusId, imageUrl, CategoryId } = req.body
            const campaign = await Campaign.create({ title, money: "0", target, description, duration, StatusId, imageUrl, CategoryId, UserId })
            res.status(201).json({ campaign })
        } catch (error) {
            next(error)
        }
    }

    static async deleteCampaign(req, res, next) {
        try {
            const id = req.params.id
            const data = await Campaign.destroy({ where: { id } })
            res.status(200).json({ message: "success delete" })
        } catch (error) {
            next(error)
        }
    }
    static async editCampaign(req, res, next) {
        try {
            const UserId = req.user.id
            const id = req.params.id
            const { title, target, description, duration, money, StatusId, imageUrl, CategoryId, } = req.body
            const data = await Campaign.update({
                title, target, description, duration, money, StatusId, UserId, imageUrl, CategoryId
            }, {
                where: {
                    id
                }
            })
            const newCampaign = await Campaign.findByPk(id)
            res.status(200).json({ message: "success edit", newCampaign })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CampaignController