const estacionUsuario = (sequelize, type) => {
    return sequelize.define('estacion_usuario', {
        estacionId: {
            type: type.INTEGER,
            references: {
                model: 'estacion',
                key: 'estacionId'
            }
        },
        usuarioId: {
            type: type.INTEGER,
            references: {
                model: 'usuario',
                key: 'usuarioId'
            }
        },
        fechaAsignacion: {
            type: type.DATE,
            defaultValue: type.NOW,
            comment: 'Fecha de asignación de la estación al usuario'
        }
    }, {
        timestamps: false,
        comment: 'Tabla intermedia para la relación muchos a muchos entre estaciones y usuarios'
    });
};

module.exports = estacionUsuario;
