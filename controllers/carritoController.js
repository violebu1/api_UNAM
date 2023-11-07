import Carrito from '../models/carrito.js';
import carritoRouter from '../routes/carritoRouter.js';

export async function getCarritoById(req, res) {
  try {
    const carritoId = parseInt(req.params.id);
    const carritoEncontrado = await Carrito.findByPk(carritoId);

    if (carritoEncontrado) {
      res.status(200).json(carritoEncontrado);
    } else {
      res.status(404).json({ message: 'Carrito no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function createCarrito(req, res) {
  try {
    const nuevoCarrito = await Carrito.create(req.body);
    res.status(201).json(nuevoCarrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear un nuevo carrito' });
  }
}


