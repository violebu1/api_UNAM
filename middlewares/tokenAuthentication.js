import  Jwt from "jsonwebtoken"

function authenticationToken(req, res, next) {
    const headerAuthorization = req.headers['authorization']

    const tokenRecibido = headerAuthorization.split(" ")[1]

    if (tokenRecibido == null) {
        return res.status(401).send({ mensaje: "Token inválido " })
    }

    let payload = null

    try {
        
        payload = jwt.verify(tokenRecibido, procces.env.SECRET_KEY)

    } catch (error) {
        return res.status(401).send({ mensaje: "Token inválido" })
    }

    if (Date.now() > payload.exp) {
        return res.status(401).send({ mensaje: "El Token ha expirado" })
    }

    

    req.user = payload.sub

    next()
}

export default authenticationToken
