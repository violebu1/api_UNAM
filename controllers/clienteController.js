import clientes from "../models/clientes.js";

//get all
export async function getAllClients(req, res) {
    try {
        const allClientes = await Clientes.findAll();

        res.status(200).json(allClientes)

    } catch (error) {
        res.status(500).json({ "message": error })
    }
}

//by id

export async function getOnClientsById(req, res) {
    try {
        let cliente_id = parseInt(req.params.id)
        let clienteEncontrado = await cliente_id.findByPk(cliente_id);

        if (clienteEncontrado) {
            res.status(200).json(clienteEncontrado);
        } else {
            res.status(404).json({ "message": "No se ha encontrado al usuario con el ID dado" });
        }

    } catch (error) {
        res.status(204).json({ "message": error })
    }
}

//new

export async function saveClients(req, res) {
    try {

        const clienteAGuardar = new clientes(req.body)
        await clienteAGuardar.save()

        res.status(201).json({ "message": "success" })

    } catch (error) {
        res.status(204).json({ "message": "error" })
    }
}

//edit

export async function editClients(req, res) {
    let idClienteAEditar = parseInt(req.params.id);
    try {
        const clienteAActualizar = await clientes.findByPk(idClienteAEditar);

        if (!clienteAActualizar) {
            return res.status(404).json({ "message": "Usuario no encontrado" });
        }

        await cienteAActualizar.save();
        res.status(200).json({ "message": "Usuario actualizado" });


    } catch (error) {
        res.status(500).json({ "message": "Error" });
    }
}


//delete 
export async function deleteClients(req, res) {
    let idClienteABorrar = parseInt(req.params.id);

    try {
        let clienteABorrar = await clientes.findByPk(idClienteABorrar);

        if (!clienteABorrar) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        await clienteABorrar.destroy();
        res.status(200).send('Usuario eliminado');


    } catch (error) {
        return res.status(500).json({ "message": "Error " });
    }
}