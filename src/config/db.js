const Sybase = require('sybase');
const dotenv = require('dotenv');

dotenv.config();

const db = new Sybase(
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD
);

module.exports = db;
