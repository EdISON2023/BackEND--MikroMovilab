const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys'); // Importar la clave secreta desde keys.js

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]; // Espera el token en el formato "Bearer <token>"

    if (!token) {
        return res.status(403).send("Token no proporcionado");
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(403).send("Token inválido");
        }

        req.user = decoded; // Agrega la información del usuario a la solicitud
        next();
    });
};

module.exports = authMiddleware;
