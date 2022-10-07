const { Sequelize } = require('sequelize');

/* const sequelize = new Sequelize(
    'dcj3ffcuchm1cb',
    'afkiwlqbyyxtzq',
    'cf1a7745a49e8c496f62721d2b916b54541826b636b3776f50bbfba369a37c9a',
    {
        host: 'ec2-18-208-55-135.compute-1.amazonaws.com',
        dialect: 'postgres',
        dialectOptions: {
          ssl: {require:true, rejectUnauthorized: false }
        },
        native: false,
        ssl: true,
    });

    try {
        sequelize.authenticate();
        console.log('La conexion fue exitosa');
      } catch (error) {
        console.error('Hubo un problema con la conexión', error);
      } */

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;