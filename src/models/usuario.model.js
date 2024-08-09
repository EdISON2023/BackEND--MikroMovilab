const usuario = (sequelize, type) => {
    return sequelize.define('usuarios', {
        usuarioId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de usuario'
        },
        nombreUsuario: {
            type: type.STRING,
            comment: 'Nombres completo'
        },
        apellidoUsuario: {
            type: type.STRING,
            comment: 'Apellidos completo'
        },
        telefonoUsuario: {
            type: type.STRING,
            comment: 'Nombre completo'
        },
        correoUsuario: {
            type: type.STRING,
            comment: 'Correo electronico'
        },
        contrasenaUsuario: {
            type: type.STRING,
            comment: 'contraseña de usuario'
        },
        fechaNacimientoUsuario: {
            type: type.DATE,
            comment: 'Fecha de nacimiento de usuario'
        },
        rolUser:{
            type: type.STRING,
            comment: 'rolde usuario'
        },
        estado_usuario: {
            type: type.BOOLEAN,
            comment: 'estado de usuario'
        },
        createUser: {
            type: type.DATE,
            comment: 'crear de usuario'
        },
        updateUser: {
            type: type.DATE,
            comment: 'actualizar de usuario'
        },
    }, {
        timestamps: false,
        comment: 'Tabla de usuarios'
    })
}

module.exports = usuario;