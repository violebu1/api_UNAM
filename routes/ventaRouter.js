import express from "express";
import authenticationToken from "../middlewares/tokenAuthentication.js";

const ventaRouter = express.Router();

import {
    getVentaById,
    createVenta,
    deleteVenta
} from '../controllers/ventaController.js'

ventaRouter.get('/ventas', getAllVentas);
ventaRouter.get('/ventas/:id', getVentaById);
ventaRouter.post('/ventas', authenticationToken, createVenta);
ventaRouter.patch('/ventas/:id', authenticationToken, updateVenta);
ventaRouter.delete('/ventas/:id', authenticationToken, deleteVenta);

export default ventaRouter;
