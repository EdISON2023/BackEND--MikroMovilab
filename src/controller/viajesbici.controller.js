const viajesBiciCtl = {};
const sql = require("../Database/dataBase.sql"); 

viajesBiciCtl.mostrar = async (req, res) => {
  try {
    const resultados = await sql.query("SELECT * FROM viajesBicis");
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error al obtener los viajes:", error);
    res.status(500).send("Hubo un error al obtener los viajes");
  }
};

viajesBiciCtl.mandar = async (req, res) => {
  const { mensaje, contactoMensaje, estadoMensaje, longitudMensaje } = req.body;
  const createViajesBici = new Date(); // Fecha y hora actuales

  try {
    await sql.query(
      "INSERT INTO viajesBicis (mensaje, contactoMensaje, estadoMensaje, createMensaje, longitudMensaje) VALUES (?, ?, ?, ?, ?)",
      [mensaje, contactoMensaje, estadoMensaje, longitudMensaje, createViajesBici]
    );
    res.status(200).send("Viaje creado con éxito");
  } catch (error) {
    console.error("Error al crear el viaje:", error);
    res.status(500).send("Hubo un error al crear el viaje");
  }
};

// Nueva función para obtener un mensaje personalizado por ID
viajesBiciCtl.obtenerPorId = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("ID a buscar:", id);
    const rows = await sql.query(
      "SELECT * FROM viajesBicis WHERE viajesBiciId = ?",
      [id]
    );

    if (rows.length === 0) {
      console.log("Viajes no encontrado.");
      return res.status(404).json({ message: 'Viaje no encontrado' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error al obtener el viaje:", error);
    res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
};

viajesBiciCtl.eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query(
      "DELETE FROM viajesBicis WHERE viajesBiciId = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("viajes eliminado con éxito");
    } else {
      res.status(404).send("viajes no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el viaje:", error);
    res.status(500).send("Hubo un error al eliminar el viaje");
  }
};

// Nueva función para actualizar un mensaje personalizado por ID
viajesBiciCtl.actualizar = async (req, res) => {
  const { id } = req.params;
  const { mensaje, contactoMensaje, estadoMensaje, longitudMensaje } = req.body;
  const updateviajesBici = new Date(); // Fecha y hora actuales

  try {
    const result = await sql.query(
      "UPDATE viajesBicis SET mensaje = ?, contactoMensaje = ?, estadoMensaje = ?, longitudMensaje = ?, updateMensaje = ? WHERE viajesBiciId = ?",
      [mensaje, contactoMensaje, estadoMensaje, longitudMensaje, updateviajesBici, id]
    );

    if (result.affectedRows > 0) {
      res.status(200).send("viajes actualizado con éxito");
    } else {
      res.status(404).send("viajes no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el viaje:", error);
    res.status(500).send("Hubo un error al actualizar el viaje");
  }
};

module.exports = viajesBiciCtl;
