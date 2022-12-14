const ProductModel = require('../models/ProductModel');

class ProductController {
    async store(req, res) {
        try {
            const { title, description, price } = req.body
            const productExists = await ProductModel.findOne({ title })
            if (productExists) return res.status(400).json({ message: 'Product already exists' })
            if (!title || !description || !price) return res.status(400).json({ message: "title, description and price are required" })
            const createdProduct = await ProductModel.create(req.body);
            return res.status(200).json(createdProduct);
        } catch {
            return res.status(404).json({ message: 'Failed to create item' })
        }

    }

    async index(req, res) {
        try {
            const products = await ProductModel.find();
            return res.status(200).json(products);
        } catch {
            return res.status(404).json({ message: 'Failed to find items' })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params
            const product = await ProductModel.findById(id);

            if (!product) return res.status(404).json({ message: 'Product not found' })

            return res.status(200).json(product);
        } catch {
            return res.status(404).json({ message: 'Verify product id' })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await ProductModel.findByIdAndUpdate(id, req.body)
            return res.status(200).json({ message: 'Product updated' });
        } catch {
            return res.status(404).json({ message: 'Failed to update' })
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const productDeleted = await ProductModel.findByIdAndDelete(id)
            if (!productDeleted) return res.status(404).json({ message: "Product doesn't exist" })
            return res.status(200).json({ message: "product deleted" });
        } catch {
            return res.status(404).json({ message: 'Failed to delete' })
        }
    }
}

module.exports = new ProductController();