import {Router}  from 'express'
import productController from '../controllers/productController.js'

const router = Router()
router.get('/mockingproducts');

export default router