const viajesBici = (sequelize, type) => {
    return sequelize.define('viajesBicis', {
        viajesBiciId : {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de mensaje Personzalido'
        },
        mensaje: {
            type: type.TEXT,
            comment: 'meensaje en caso de emergencia'
        },
        contactoMensaje: {
            type: type.STRING,
            comment: 'Descripcion de la estacion'
        },
        estadoMensaje: {
            type: type.STRING,
            comment: 'estado de usuario'
        },
        createMensaje: {
            type: type.DATE,
            comment: 'crear estacion'
        },
        longitudMensaje: {
            type: type.STRING,
            Comment: 'longitud'
        },
        updateMensaje: {
            type: type.DATE,
            comment: 'actualizar estacion'
        },
    }, {
        timestamps: false,
        comment: 'Tabla de Mensaje Personalizado'
    })
}

module.exports = viajesBici