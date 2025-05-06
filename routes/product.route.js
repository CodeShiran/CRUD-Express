import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controller/product.controller.js";
import { Product } from "../model/product.model.js";
import { Router } from "express";

export const router= Router()

//add product
router.post('/', addProduct)
 
//get all products
router.get('/', getAllProducts)
 
//get a product 
router.get('/:id', getProduct)
 
//update a product
router.put('/:id', updateProduct)
 
//delete a product 
router.delete('/:id', deleteProduct)
 