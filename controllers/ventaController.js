import Ventas from '../models/ventas.js';

export async function getVentaById(req, res) {
  try {
    const ventaId = parseInt(req.params.id);
    const ventaEncontrada = await Ventas.findByPk(ventaId);

    if (ventaEncontrada) {
      res.status(200).json(ventaEncontrada);
    } else {
      res.status(404).json({ message: 'Venta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function createVenta(req, res) {
  try {
    const nuevaVenta = await Ventas.create(req.body);
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear una nueva venta' });
  }
}


//todos los Ventas
export async function getAllVenta(req, res) {
  try {
      const allVentas = await Ventas.findAll();

      res.status(200).json(allVentas)

  } catch (error) {
      res.status(500).json({ "message": error })
  }
}

//Venta por id

export async function getOnVentaById(req, res) {
  try {
      let VentaId = parseInt(req.params.id)
      let VentaEncontrado = await VentaId.findByPk(VentaId);

      if (VentaEncontrado) {
          res.status(200).json(VentaEncontrado);
      } else {
          res.status(404).json({ "message": "No se ha encontrado al Venta con el ID dado" });
      }

  } catch (error) {
      res.status(204).json({ "message": error })
  }
}

//nuevo Venta

export async function saveVenta(req, res) {
  try {

      const VentaAGuardar = new Ventas(req.body)
      await VentaAGuardar.save()

      res.status(201).json({ "message": "success" })

  } catch (error) {
      res.status(204).json({ "message": "error" })
  }
}

//editar 

export async function editVenta(req, res) {
  let idVentaAEditar = parseInt(req.params.id);
  try {
      const VentaAActualizar = await Ventas.findByPk(idVentaAEditar);

      if (!VentaAActualizar) {
          return res.status(404).json({ "message": "Venta no encontrado" });
      }

      await VentaAActualizar.save();
      res.status(200).json({ "message": "Venta actualizado" });


  } catch (error) {
      res.status(500).json({ "message": "Error" });
  }
}



export async function deleteVenta(req, res) {
  let idVentaABorrar = parseInt(req.params.id);

  try {
      let VentaABorrar = await Ventas.findByPk(idVentaABorrar);

      if (!VentaABorrar) {
          return res.status(404).json({ message: 'Venta no encontrado.' });
      }

      await VentaABorrar.destroy();
      res.status(200).send('Venta eliminado');


  } catch (error) {
      return res.status(500).json({ "message": "Error " });
  }
}
