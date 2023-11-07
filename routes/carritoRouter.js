import express from "express";
import authenticationToken from "../middlewares/tokenAuthentication.js";

const carritoRouter = express.Router();

import {
    getCarritoById,
    createCarrito
} from '../controllers/carritoController.js'

carritoRouter.get('/carritos', getAllCarritos);
carritoRouter.get('/carritos/:id', getCarritoById);
carritoRouter.post('/carritos', authenticationToken, createCarrito);
carritoRouter.patch('/carritos/:id', authenticationToken, updateCarrito);
carritoRouter.delete('/carritos/:id', authenticationToken, deleteCarrito);

export default carritoRouter;
