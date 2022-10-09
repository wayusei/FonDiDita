const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    },
    native: false,
    ssl: true,
});

try {
  sequelize.authenticate();
  console.log('La conexion fue exitosa');
} catch (error) {
  console.error('Hubo un problema con la conexión', error);
}



module.exports = sequelize;