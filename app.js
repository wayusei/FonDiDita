require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');
const auth = require('./config/auth');

const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI =require('swagger-ui-express');

//const YAML = require('yamljs');
//const swaggerDocument = YAML.load('./config/swagger.yaml');



const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use(auth.optional);
app.use('/', routes);

<<<<<<< HEAD
//const swaggerOptions =require('./config/swagger');
const swaggerDocs =swaggerJsDoc(swaggerOptions);
//app.use('/docs',swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs))
=======
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
>>>>>>> 1e82b5128e57dedc501ad777662b40f95292c29b

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB', error);
}

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listing on PORT", process.env.PORT);
});


