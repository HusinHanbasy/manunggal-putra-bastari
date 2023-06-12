const { Status } = require('../models')

class StatusController {
    static async allStatus(req, res, next) {
        try {
            const status = await Status.findAll()
            res.status(200).json(status)
        } catch (error) {
            next(error)
        }
    }

    static async addStatus(req, res, next) {
        try {
            const { name } = req.body
            const data = await Status.create({ name })
            res.status(201).json({ data })
        } catch (error) {
            next(error)
        }
    }
    static async deleteStatus(req, res, next) {
        try {
            const id = req.params.id
            const data = await Status.destroy({ where: { id } })
            res.status(200).json({ message: "success delete" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = StatusController