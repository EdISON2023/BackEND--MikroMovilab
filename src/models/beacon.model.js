const beacon = (sequelize, type) => {
    return sequelize.define('beacon', {
        beaconId : {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'Campo unico de punto de interes'
        },

        latitudBeacon: {
            type: type.DECIMAL,
            comment: 'latitud de Beacon'
        },
        ubicacionBeacon: {
            type: type.STRING,
            comment: 'ubicacion del Beacon'
        },
        estadoBeacon: {
            type: type.BOOLEAN,
            comment: 'estado del punto de interes'
        },
        createBeacon: {
            type: type.DATE,
            comment: 'crear punto interes'
        },
        updateBeacon: {
            type: type.DATE,
            comment: 'actualizar punto de interes'
        },
    }, {
        timestamps: false,
        comment: 'Tabla del Beacon'
    })
}

module.exports = beacon