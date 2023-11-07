import Niveles from '../models/niveles';

export async function getNivelById(req, res) {
  try {
    const nivelId = parseInt(req.params.id);
    const nivelEncontrado = await Niveles.findByPk(nivelId);

    if (nivelEncontrado) {
      res.status(200).json(nivelEncontrado);
    } else {
      res.status(404).json({ message: 'Nivel no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function createNivel(req, res) {
  try {
    const nuevoNivel = await Niveles.create(req.body);
    res.status(201).json(nuevoNivel);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear un nuevo nivel' });
  }
}


