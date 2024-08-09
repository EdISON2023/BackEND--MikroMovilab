const estacionCtl = {};
const sql = require("../Database/dataBase.sql"); 

estacionCtl.mostrar = async (req, res) => {
  try {
    const resultados = await sql.query("SELECT * FROM estaciones");
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error al obtener las estaciones:", error);
    res.status(500).send("Hubo un error al obtener las estaciones");
  }
};

estacionCtl.mandar = async (req, res) => {
  const { nombreEstacion, descripcionEstacion, ubicacionEstacion, estadoEstacion } = req.body;
  const createEstacion = new Date(); // Fecha y hora actuales

  try {
    await sql.query(
      "INSERT INTO estaciones (nombreEstacion, descripcionEstacion, ubicacionEstacion, estadoEstacion, createEstacion) VALUES (?, ?, ?, ?, ?)",
      [nombreEstacion, descripcionEstacion, ubicacionEstacion, estadoEstacion, createEstacion]
    );
    res.status(200).send("Estación creada con éxito");
  } catch (error) {
    console.error("Error al crear la estación:", error);
    res.status(500).send("Hubo un error al crear la estación");
  }
};

// Nueva función para obtener una estación por ID
estacionCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("ID a buscar:", id);
    const rows = await sql.query(
      "SELECT * FROM estaciones WHERE estacionId = ?",
      [id]
    );

    if (rows.length === 0) {
      console.log("Estación no encontrada.");
      return res.status(404).json({ message: 'Estación no encontrada' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error al obtener la estación:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

estacionCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query(
      "DELETE FROM estaciones WHERE estacionId = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("Estación eliminada con éxito");
    } else {
      res.status(404).send("Estación no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar la estación:", error);
    res.status(500).send("Hubo un error al eliminar la estación");
  }
};

// Nueva función para actualizar una estación por ID
estacionCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombreEstacion, descripcionEstacion, ubicacionEstacion, estadoEstacion } = req.body;
  const updateEstacion = new Date(); // Fecha y hora actuales

  try {
    const result = await sql.query(
      "UPDATE estaciones SET nombreEstacion = ?, descripcionEstacion = ?, ubicacionEstacion = ?, estadoEstacion = ?, updateEstacion = ? WHERE estacionId = ?",
      [nombreEstacion, descripcionEstacion, ubicacionEstacion, estadoEstacion, updateEstacion, id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("Estación actualizada con éxito");
    } else {
      res.status(404).send("Estación no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar la estación:", error);
    res.status(500).send("Hubo un error al actualizar la estación");
  }
};

module.exports = estacionCtl;
