const { Category } = require('../models')

class CategoryController {
    static async allCategory(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch (error) {
            next(error)
        }
    }

    static async addCategory(req, res, next) {
        try {
            const { name } = req.body
            const data = await Category.create({ name })
            res.status(201).json({ data })
        } catch (error) {
            next(error)
        }
    }
    static async deleteCategory(req, res, next) {
        try {
            const id = req.params.id
            const data = await Category.destroy({ where: { id } })
            res.status(200).json({ message: "success delete" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CategoryController