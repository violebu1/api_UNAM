import express from "express";

import authenticationToken from "../middlewares/tokenAuthentication.js";

const usuarioRouter = express.Router()

import {
    getAllUsuarios,
    getOnUsuariosById,
    saveUsuarios,
    editUsuarios,
    deleteUsuarios
} from '../controllers/usuarioController.js'

usuarioRouter.get('/usuarios', getAllUsuarios)
usuarioRouter.get('usuarios:id', getOnUsuariosById)
usuarioRouter.post('/usuarios', authenticationToken, saveUsuarios)
usuarioRouter.patch('/usuarios/:id',authenticationToken, editUsuarios)
usuarioRouter.delete('/usuarios/:id', authenticationToken, deleteUsuarios)


export default usuarioRouter