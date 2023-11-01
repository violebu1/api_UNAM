import express from "express";

import authenticationToken from "../middlewares/tokenAuthentication.js";

const productoRouter = express.Router()

import {
    getAllProducts,
    getOnProductsById,
    saveProducts,
    editProducts,
    deleteProducts
} from '../controllers/productoController.js'

productoRouter.get('/productos', getAllProducts)
productoRouter.get('productos:id', getOnProductsById)
productoRouter.post('/productos', authenticationToken, saveProducts)
productoRouter.patch('/productos/:id',authenticationToken, editProducts)
productoRouter.delete('/productos/:id', authenticationToken, deleteProducts)


export default productoRouter