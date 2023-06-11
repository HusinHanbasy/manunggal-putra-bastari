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
            const UserId = req.user.id
            const user = await User.findByPk(UserId)
            if (!user) {
                throw { name: "NotFound" }
            }

            // --> find campaign <--
            const { value, CampaignId } = req.body
            const campaign = await Campaign.findByPk(CampaignId)
            if (!campaign) {
                throw { name: "NotFound" }
            }

            // --> upate money campaign <--
            const { title, name, target, description, donator, duration, status, image, CategoryId } = campaign
            const updateCampaign = await Campaign.update({ title, name, money: +campaign.money + value, target, description, donator, duration, status, image, CategoryId })

            // --> create donation history<--
            const donation = await Donation.create({ CampaignId, UserId, value })
            const history = await History.create({ UserId, CampaignId, description: ` campaign with name ${campaign.name} has been donate by Ummat with name ${user.username}` })
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