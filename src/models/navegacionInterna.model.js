const navegacionInterna = (sequelize, type) => {
    return sequelize.define('navegacionInterna',{
        navegacionInternaId : {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de navegacion interna'
        },
        fechaHoraNavegacionInterna: {
            type: type.DATE,
            comment: 'Fecha y hora de la ruta en el metro'
        },
        createNavegacionInterna: {
            type: type.DATE,
            comment: 'crear navegacion interna'
        },
        updateNavegacionInterna: {
            type: type.DATE,
            comment: 'actuazlizar navegacion interna'
        },
        }, {
            timestamps: false,
            comment: 'Tabla navegacion interna'
    })
}

module.exports = navegacionInterna