const navegacionExterna = (sequelize, type) => {
    return sequelize.define('navegacionExterna',{
        navegacionExternaId : {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de navegacion externa'
        },
        origenNavegacionExterna: {
            type: type.STRING,
            comment: 'El comienzo de la ruta'
        },
        destinoNavegacionExterna: {
            type: type.STRING,
            comment: 'Lugar final de la ruta'
        },
        fechaHoraNavegacionExterna: {
            type: type.DATE,
            comment: 'Fecha y hora de la ruta'
        },
        createNavegacionExterna: {
            type: type.DATE,
            comment: 'crear navegacion externa'
        },
        updateNavegacionExterna: {
            type: type.DATE,
            comment: 'actuazlizar navegacion externa'
        },
        }, {
            timestamps: false,
            comment: 'Tabla navegacion externa'
    })
}

module.exports = navegacionExterna