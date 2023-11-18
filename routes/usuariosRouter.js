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

usuariosRouter.get('/usuarios', getAllUsers)
usuariosRouter.get('usuarios:id', getOnUsersById)
usuariosRouter.post('/usuarios', authenticationToken, saveUsers)
usuariosRouter.patch('/usuarios/:id',authenticationToken, editUsers)
usuariosRouter.delete('/usuarios/:id', authenticationToken, deleteUsers)


export default usuariosRouter