import express from "express";
import authenticationToken from "../middlewares/tokenAuthentication.js";

const carritoRouter = express.Router();

import {
    getCarritoById,
    createCarrito
} from '../controllers/carritoController.js'


carritoRouter.get('/carritos/:id', getCarritoById);
carritoRouter.post('/carritos', authenticationToken, createCarrito);



export default carritoRouter;
