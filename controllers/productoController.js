import Productos from "../models/productos.js"


//todos los productos 

export async function getAllProducts(req, res) {
    try {

        let allProducts = await Productos.findAll()

        res.status(200).json(allProducts)

    } catch (error) {
        res.status(204).json({ "message": error })
    }
}

//obtener un producto por su id 

export async function getOnProductsById(req, res) {
    try {
        let productoId = parseInt(req.params.id)
        let productoEncontrado = await productoId.findByPk(productoId);

        res.status(200).json(productoEncontrado)

    } catch (error) {
        res.status(204).json({ "message": error })
    }
}

//crear un nuevo producto 

export async function saveProducts(req, res) {
    try {

        const productoAGuardar = new Productos(req.body)
        await productoAGuardar.save()

        res.status(201).json({ "message": "success" })

    } catch (error) {
        res.status(204).json({ "message": "error" })
    }
}

//editar un producto 

export async function editProducts(req, res) {

    let idProductoAEditar = parseInt(req.params.id)
    try {
        let productoAActualizar = await Productos.findByPk(idProductoAEditar)

        if (!productoAActualizar) {
            res.status(204).json({ "message": "No se encuentra el producto" })
        }

        await productoAActualizar.update(req.body)

        res.status(200).send('Producto actualizado')

    } catch (error) {
        res.status(204).json({ 'message': 'Producto no encontado' }
        )
    }
}

//borrar un producto 

export async function deleteProducts(req,res){
    let idProductoABorrar = parseInt(req.params.id)
    try {
        let productoABorrar = await Productos.findByPk(idProductoABorrar)

        if (!productoABorrar) {
            res.status(204).json({ "message": "No se encuentra el producto" })
        }

        await productoABorrar.destroy()
        res.status(200).json({ "message": "Producto borrado" })

    } catch (error) {
        res.status(204).json({ "message": "error" })
    }
}