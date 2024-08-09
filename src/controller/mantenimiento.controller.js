const mantenimientoCtl = {};
const sql = require("../Database/dataBase.sql"); 

mantenimientoCtl.mostrar = async (req, res) => {
  try {
    const resultados = await sql.query("SELECT * FROM mantenimientos");
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error al obtener las mantenimientos:", error);
    res.status(500).send("Hubo un error al obtener las mantenimientos");
  }
};



mantenimientoCtl.mandar = async (req, res) => {
  const { nombreRuta, descripcionRuta, ubicacionRuta, estadoRuta } = req.body;
  const createMantenimiento = new Date(); // Fecha y hora actuales

  try {
    await sql.query(
      "INSERT INTO mantenimientos (nombreRuta, descripcionRuta, ubicacionRuta, estadoRuta, createMantenimiento) VALUES (?, ?, ?, ?, ?)",
      [nombreRuta, descripcionRuta, ubicacionRuta, estadoRuta, createMantenimiento]
    );
    res.status(200).send("mantenimiento creada con éxito");
  } catch (error) {
    console.error("Error al crear el mantenimiento:", error);
    res.status(500).send("Hubo un error al crear el mantenimiento");
  }
};

// Nueva función para obtener una ruta por ID
mantenimientoCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("ID a buscar:", id);
    const rows = await sql.query(
      "SELECT * FROM mantenimientos WHERE mantenimientoId = ?",
      [id]
    );

    if (rows.length === 0) {
      console.log("Mantenimiento no encontrada.");
      return res.status(404).json({ message: 'Mantenimiento no encontrada' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error al obtener el mantenimiento:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

mantenimientoCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query(
      "DELETE FROM mantenimientos WHERE mantenimientoId = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("Mantenimiento eliminada con éxito");
    } else {
      res.status(404).send("Mantenimiento no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar la mantenimiento:", error);
    res.status(500).send("Hubo un error al eliminar el mantenimiento");
  }
};

// Nueva función para actualizar una ruta por ID
mantenimientoCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombreRuta, descripcionRuta, ubicacionRuta, estadoRuta } = req.body;
  const updateMantenimiento = new Date(); // Fecha y hora actuales

  try {
    const result = await sql.query(
      "UPDATE mantenimientos SET nombreRuta = ?, descripcionRuta = ?, ubicacionRuta = ?, estadoRuta = ?, updateMAntenimiento = ? WHERE mantenimientoId = ?",
      [nombreRuta, descripcionRuta, ubicacionRuta, estadoRuta, updateMantenimiento, id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("Mantenimiento actualizada con éxito");
    } else {
      res.status(404).send("Mantenimiento no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar el mantenimiento:", error);
    res.status(500).send("Hubo un error al actualizar el mantenimiento");
  }
};

module.exports = mantenimientoCtl;
