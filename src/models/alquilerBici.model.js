const alquilerBici = (sequelize, type) => {
  return sequelize.define(
    "alquilerbicis",
    {
      alquilerBiciId: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "Campo unico de guia de Voz",
      },
      descripcionGuiaVoz: {
        type: type.STRING,
        comment: "Descripcion de la guia de Voz",
      },
      audioUrlGuiaVoz: {
        type: type.STRING,
        comment: "audio url donde se encuentra la guia de Voz",
      },
      idiomaGuiaVoz: {
        type: type.STRING,
        comment: "idioma donde se encuentra la guia de Voz",
      },
      estadoGuiaVoz: {
        type: type.STRING,
        comment: "estado de guia de Voz",
      },
      createAlquilerBici: {
        type: type.DATE,
        comment: "Fecha y hora de creación de la guía de voz",
      },
      updateAlquilerBici: {
        type: type.DATE,
        comment: "Fecha y hora de última actualización de la guía de voz",
      },
    },
    {
      timestamps: false,
      comment: "Tabla de guias de Voz",
    }
  );
};

module.exports = alquilerBici;
