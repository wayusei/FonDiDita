
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');
const auth = require('./config/auth');

const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI =require('swagger-ui-express');

/*
const swaggerSpec ={
    openapi:"3.0.0",
    info:{
        title:"fondita2",
        version:"1.0.1"
    }
}*/


const app = express();
app.use(express.json());
app.use(auth.optional);
app.use('/', routes);

const swaggerDocs =swaggerJsDoc(swaggerOptions);
app.use('/docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs))

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

app.listen(3000, () => {
    console.log("Server listing on PORT", process.env['PORT']);
});


