const alquilerBiciCtl = {};
const sql = require("../Database/dataBase.sql"); 

alquilerBiciCtl.mostrar = async (req, res) => {
  try {
    const resultados = await sql.query("SELECT * FROM alquilerbicis");
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error al obtener las bicicletas:", error);
    res.status(500).send("Hubo un error al obtener las bicicletas");
  }
};

alquilerBiciCtl.mandar = async (req, res) => {
  const { descripcionGuiaVoz, audioUrlGuiaVoz, idiomaGuiaVoz, estadoGuiaVoz } = req.body;
  const createAlquilerBici = new Date(); // Fecha y hora actuales

  try {
    await sql.query(
      "INSERT INTO alquilerbicis (descripcionGuiaVoz, audioUrlGuiaVoz, idiomaGuiaVoz, estadoGuiaVoz, createAlquilerBici) VALUES (?, ?, ?, ?, ?)",
      [descripcionGuiaVoz, audioUrlGuiaVoz, idiomaGuiaVoz, estadoGuiaVoz, createAlquilerBici]
    );
    res.status(200).send("alquiler creada con éxito");
  } catch (error) {
    console.error("Error al crear el alquiler:", error);
    res.status(500).send("Hubo un error al crear el alquiler");
  }
};

// Nueva función para obtener una guía de voz por ID
alquilerBiciCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("ID a buscar:", id);
    const rows = await sql.query(
      "SELECT * FROM alquilerbicis WHERE alquilerBiciId = ?",
      [id]
    );

    if (rows.length === 0) {
      console.log("alquiler no encontrada.");
      return res.status(404).json({ message: 'alquiler no encontrada' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error al obtener el alquiler:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

alquilerBiciCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query(
      "DELETE FROM alquilerbicis WHERE alquilerBiciId = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("alquiler eliminada con éxito");
    } else {
      res.status(404).send("alquiler no encontrada");
    }
  } catch (error) {
    console.error("Error al eliminar el alquiler:", error);
    res.status(500).send("Hubo un error al eliminar el alquiler");
  }
};

alquilerBiciCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { descripcionGuiaVoz, audioUrlGuiaVoz, idiomaGuiaVoz, estadoGuiaVoz } = req.body;
  const updateAlquilerBici = new Date(); // Fecha y hora actuales

  try {
    const result = await sql.query(
      "UPDATE alquilerbicis SET descripcionGuiaVoz = ?, audioUrlGuiaVoz = ?, idiomaGuiaVoz = ?, estadoGuiaVoz = ?, updateAlquilerBici = ? WHERE alquilerBiciId = ?",
      [descripcionGuiaVoz, audioUrlGuiaVoz, idiomaGuiaVoz, estadoGuiaVoz, updateAlquilerBici, id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("alquiler actualizada con éxito");
    } else {
      res.status(404).send("alquiler no encontrada");
    }
  } catch (error) {
    console.error("Error al actualizar el alquiler:", error);
    res.status(500).send("Hubo un error al actualizar el alquiler");
  }
};

module.exports = alquilerBiciCtl;
