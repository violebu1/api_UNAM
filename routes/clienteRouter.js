import express from "express";

import authenticationToken from "../middlewares/tokenAuthentication.js";

const clienteRouter = express.Router()

import {
    getAllClients,
    getOnClientsById,
    saveClients,
    editClients,
    deleteClients
} from '../controllers/clienteController.js'

clienteRouter.get('/clientes', getAllClients)
clienteRouter.get('clientes:id', getOnClientsById)
clienteRouter.post('/clientes', authenticationToken, saveClients)
clienteRouter.patch('/clientes/:id',authenticationToken, editClients)
clienteRouter.delete('/clientes/:id', authenticationToken, deleteClients)


export default clienteRouter