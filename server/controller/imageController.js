const { Image } = require('../models')

class ImageController {
    static async allImage(req, res, next) {
        try {
            const image = await Image.findAll()
            res.status(200).json({ image })
        } catch (error) {
            next(error)
        }
    }
    static async imageById(req, res, next) {
        try {
            const id = req.params.id
            const data = await Image.findOne({
                where: {
                    id
                }
            })
            if (!data) {
                throw { name: "NotFound" }
            }
            res.status(200).json({ data })
        } catch (error) {
            next(error)
        }
    }
    static async addImage(req, res, next) {
        try {
            const { CampaignId, image, description } = req.body
            const data = await Image.create({ CampaignId, image, description })
            res.status(201).json({ data })
        } catch (error) {
            next(error)
        }
    }
    static async deleteImage(req, res, next) {
        try {
            const id = req.params.id
            const data = await Image.destroy({ where: { id } })
            res.status(200).json({ message: "success delete" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ImageController