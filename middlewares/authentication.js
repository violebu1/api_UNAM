import Jwt  from "jsonwebtoken"
import Usuarios from "../models/usuarios" 



async function authentication(req, res) {

    
    const usuarioABuscar = req.body.usuario
    const passwordRecibido = req.body.password

    let usuarioEncontrado = ''
    
    try {
        usuarioEncontrado = await Usuarios.findAll({ where: { usuario: usuarioABuscar } })

        if (usuarioEncontrado == '') {
            return req.status(400).json({ message: 'Usuario no encontrado' })
        }
    } catch (error) {
        return req.status(400).json({ message: 'Usuario no encontrado' })
    }

    

    if (usuarioEncontrado[0].password !== passwordRecibido) {
        return res.status(400).json({ message: 'Contraseña incorrecta' })
    }

    //Generacion del token 

    const sub = usuarioEncontrado[0].id
    const usuario = usuarioEncontrado[0].usuario
    const nivel = usuarioEncontrado[0].nivel

    //firma y construccion del token 

    const token = Jwt.sign({
        sub,
        usuario,
        nivel,
        exp: Date.now() + (60 * 1000)
    }, process.env.SECRET_KEY)

    res.status(200).json({ accesstoken: token })

}

export default authentication