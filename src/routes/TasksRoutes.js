const db = require('../config/db');

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos!', err);
    process.exit(1);
  }
  console.log('Conexión exitosa a la base de datos!');
});

//get etapas
const getAllEtapasNuples = async () => {
  const query = `SELECT * FROM n_etapas`;

  try {
    const res = await db.query(query);
    return res.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllEtapasNuples
