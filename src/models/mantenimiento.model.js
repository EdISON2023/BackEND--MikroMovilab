const mantenimiento = (sequelize, type) => {
  return sequelize.define(
    "mantenimiento",
    {
      mantenimientoId: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "Campo unico de ruta",
      },
      nombreRuta: {
        type: type.STRING,
        comment: "Nombres a cual pertece dicha ruta",
      },
      descripcionRuta: {
        type: type.STRING,
        comment: "Descripcion de la ruta",
      },
      ubicacionRuta: {
        type: type.STRING,
        comment: "ubicacion donde se encuentra la ruta",
      },
      estadoRuta: {
        type: type.STRING,
        comment: "estado de ruta",
      },
      createMantenimiento: {
        type: type.DATE,
        comment: "crear ruta",
      },
      updateMantenimiento: {
        type: type.DATE,
        comment: "actualizar ruta",
      },
    },
    {
      timestamps: false,
      comment: "Tabla de rutas",
    }
  );
};

module.exports = mantenimiento;
