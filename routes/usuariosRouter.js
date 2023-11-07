import express from "express";
import authenticationToken from "../middlewares/tokenAuthentication.js";

const usuariosRouter = express.Router()

import {
    getAllUsers,
    getOnUsersById,
    saveUsers,
    editUsers,
    deleteUsers
} from '../controllers/usuariosController.js'

usuariosRouter.get('/usuarios', getAllUsuarios)
usuariosRouter.get('usuarios:id', getOnUsuariosById)
usuariosRouter.post('/usuarios', authenticationToken, saveUsuarios)
usuariosRouter.patch('/usuarios/:id',authenticationToken, editUsuarios)
usuariosRouter.delete('/usuarios/:id', authenticationToken, deleteUsuarios)


export default usuariosRouter