import { Product } from "../model/product.model.js"


export const addProduct =  async (req, res) => {
    try {
     const product = await Product.create(req.body)
     res.status(200).json({data: product, message: 'product added successfully'})
    } catch (error) {
     res.status(500).json({message: error.message})
    }
 }

export const getAllProducts = async (req, res) => {
      try {
          const products = await Product.find({})
          res.status(200).json({data: products})
      } catch (error) {
          res.status(500).json({message: error.message})
      }
  }

export const getProduct = async (req, res) => {
       try {
           const {id} = req.params
           const product = await Product.findById(id)
           res.status(200).json({data: product, message: 'data fetched successfully'})
       } catch (error) {
           res.status(500).json({message: error.message})
       }
   }

export const updateProduct = async(req, res) => {
     try {
         const {id} = req.params
         const product = await Product.findByIdAndUpdate(id, req.body)
         res.status(200).json({data: product, message: 'product updated successfully'})
     } catch (error) {
         res.status(500).json({message: error.message})
     }
 }

 export const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            return res.status(404).json({message: 'no product from gived id found'})
        }

        res.status(200).json({message: 'product deleted successfully'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}