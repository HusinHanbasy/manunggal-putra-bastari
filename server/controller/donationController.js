const { Donation, Campaign, History, User } = require('../models')

class DonationController {
    static async allDonation(req, res, next) {
        try {
            const id = req.user.id
            const donation = await Donation.findAll({ where: { id } })
            res.status(200).json({ donation })
        } catch (error) {
            next(error)
        }
    }
    static async addDonation(req, res, next) {
        try {
            // --> find user <--
            const id = req.user.id
            const user = await User.findByPk(id)
            if (!user) {
                throw { name: "NotFound" }
            }

            // --> find campaign <--
            let { value, CampaignId
            } = req.body

            const campaign = await Campaign.findByPk(CampaignId)
            if (!campaign) {
                throw { name: "NotFound" }
            }

            // --> upate money campaign <--
            const { title, target, description, duration, StatusId, imageUrl, CategoryId, UserId } = campaign
            const updateCampaign = await Campaign.update({ title, money: +campaign.money + +value, target, description, duration, StatusId, imageUrl, CategoryId, UserId }, {
                where: {
                    id: CampaignId
                }
            })

            // --> create donation history<--
            const donation = await Donation.create({ CampaignId, UserId, value })
            const history = await History.create({ UserId, CampaignId, description: ` campaign with name ${campaign.title} has been donate by Ummat with name ${user.username}` })
            res.status(201).json({ donation, history })

        } catch (error) {
            next(error)
        }
    }
    static async deleteDonation(req, res, next) {
        try {
            const id = req.params.id
            const data = await Donation.destroy({ where: { id } })
            res.status(200).json({ message: "success delete" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = DonationController