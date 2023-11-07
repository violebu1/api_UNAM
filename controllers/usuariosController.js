import Usuarios from "../models/usuarios.js";


//todos los usuarios
export async function getAllUsers(req, res) {
    try {
        const allUsuarios = await Usuarios.findAll();

        res.status(200).json(allUsuarios)

    } catch (error) {
        res.status(500).json({ "message": error })
    }
}

//usuario por id

export async function getOnUsersById(req, res) {
    try {
        let usuarioId = parseInt(req.params.id)
        let usuarioEncontrado = await usuarioId.findByPk(usuarioId);

        if (usuarioEncontrado) {
            res.status(200).json(usuarioEncontrado);
        } else {
            res.status(404).json({ "message": "No se ha encontrado al usuario con el ID dado" });
        }

    } catch (error) {
        res.status(204).json({ "message": error })
    }
}

//nuevo usuario

export async function saveUsers(req, res) {
    try {

        const usuarioAGuardar = new Usuarios(req.body)
        await usuarioAGuardar.save()

        res.status(201).json({ "message": "success" })

    } catch (error) {
        res.status(204).json({ "message": "error" })
    }
}

//editar 

export async function editUsers(req, res) {
    let idUsuarioAEditar = parseInt(req.params.id);
    try {
        const usuarioAActualizar = await Usuarios.findByPk(idUsuarioAEditar);

        if (!usuarioAActualizar) {
            return res.status(404).json({ "message": "Usuario no encontrado" });
        }

        await usuarioAActualizar.save();
        res.status(200).json({ "message": "Usuario actualizado" });


    } catch (error) {
        res.status(500).json({ "message": "Error" });
    }
}



export async function deleteUsers(req, res) {
    let idUsuarioABorrar = parseInt(req.params.id);

    try {
        let usuarioABorrar = await Usuarios.findByPk(idUsuarioABorrar);

        if (!usuarioABorrar) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        await usuarioABorrar.destroy();
        res.status(200).send('Usuario eliminado');


    } catch (error) {
        return res.status(500).json({ "message": "Error " });
    }
}