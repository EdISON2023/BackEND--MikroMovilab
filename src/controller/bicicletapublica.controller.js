const bicicletapublicaCtl = {};
const sql = require("../Database/dataBase.sql");

bicicletapublicaCtl.mostrar = async (req, res) => {
  try {
    const results = await sql.query("SELECT * FROM bicicletapublicas");
    res.status(200).json(results);
  } catch (error) {
    console.error("Error al obtener las bicicletas:", error);
    res.status(500).send("Hubo un error al obtener las bicicelta");
  }
};

bicicletapublicaCtl.mandar = async (req, res) => {
  const { nombrePunto, descripcionPunto, ubicacionPunto, estadoPunto } = req.body;
  const createPunto = new Date(); // Fecha y hora actuales

  try {
    await sql.query(
      "INSERT INTO bicicletapublicas (nombrePunto, descripcionPunto, ubicacionPunto, estadoPunto, createPunto) VALUES (?, ?, ?, ?, ?)",
      [nombrePunto, descripcionPunto, ubicacionPunto, estadoPunto, createPunto]
    );
    res.status(200).send("bicicleta creado con éxito");
  } catch (error) {
    console.error("Error al crear bicicleta:", error);
    res.status(500).send("Hubo un error al crear bicicleta");
  }
};

// Nueva función para obtener un punto de interés por ID
bicicletapublicaCtl.obtenerPorId = async (req, res) => {
    const { id } = req.params;

    try {
        console.log("ID a buscar:", id);
        const rows = await sql.query(
            "SELECT * FROM bicicletapublica WHERE bicicletapublicaId = ?",
            [id]
        );

        if (rows.length === 0) {
            console.log("bicicleta no encontrado.");
            return res.status(404).json({ message: 'bicicleta no encontrado' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Error al obtener la bicicleta:", error);
        res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
    }
};

bicicletapublicaCtl.eliminar = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await sql.query(
        "DELETE FROM bicicletapublica WHERE bicicletapublicaId = ?",
        [id]
      );
      
      if (result.affectedRows > 0) {
        res.status(200).send("bicicleta eliminado con éxito");
      } else {
        res.status(404).send("bicicleta no encontrado");
      }
    } catch (error) {
      console.error("Error al eliminar la bicicleta:", error);
      res.status(500).send("Hubo un error al eliminar la bicicleta");
    }
  };


  // Nueva función para actualizar un punto de interés por ID
  bicicletapublicaCtl.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombrePunto, descripcionPunto, ubicacionPunto, estadoPunto } = req.body;
    const updatePunto = new Date(); // Fecha y hora actuales
  
    try {
      const result = await sql.query(
        "UPDATE bicicletapublica SET nombrePunto = ?, descripcionPunto = ?, ubicacionPunto = ?, estadoPunto = ?, updatePunto = ? WHERE bicicletapublicaId = ?",
        [nombrePunto, descripcionPunto, ubicacionPunto, estadoPunto, updatePunto, id]
      );
  
      if (result.affectedRows > 0) {
        res.status(200).send("bicicleta actualizado con éxito");
      } else {
        res.status(404).send("bicicleta no encontrado");
      }
    } catch (error) {
      console.error("Error al actualizar bicicleta:", error);
      res.status(500).send("Hubo un error al actualizar la bicicleta");
    }
  };

module.exports = bicicletapublicaCtl;
