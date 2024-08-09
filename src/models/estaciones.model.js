const estaciones = (sequelize, type) => {
    return sequelize.define('estaciones', {
        estacionId : {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de estacion'
        },
        nombreEstacion: {
            type: type.STRING,
            comment: 'Nombres a cual pertece dicha estacion'
        },
        descripcionEstacion: {
            type: type.STRING,
            comment: 'Descripcion de la estacion'
        },
        ubicacionEstacion: {
            type: type.STRING,
            comment: 'ubicacion donde se encuentra la estacion'
        },
        estadoEstacion: {
            type: type.STRING,
            comment: 'estado de usuario'
        },
        createEstacion: {
            type: type.DATE,
            comment: "Fecha y hora de creación de la estacion",
          },
          updateEstacion: {
            type: type.DATE,
            comment: "Fecha y hora de última actualización de la estacion",
          },
    }, {
        timestamps: false,
        comment: 'Tabla de estacion'
    })
}

module.exports = estaciones
