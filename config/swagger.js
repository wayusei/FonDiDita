// configure the Swagger UI
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Fondidita API",
            version: "1.0.0",
            description:
                " Este es un CRUD API para la  Fase 2 del curso de Frontend  developmnet con Bedu. \n\n Este ejercicio simula la esctructura de una aplicación de venta de comida. Se definieron las estructura de **Customers, Products, Sellers, Orders** y las funciones que permiten agregar y borrar datos. \n\n Integrantes \n\n * [Sergio Monterrubio](https://github.com/sergiomm84) \n\n * [Angel Pimentel](https://github.com/angel-pm) \n\n * [Rodrigo Rosas](https://github.com/wayusei/) \n\n Enlaces: \n\n * [Repositorio GitHub](https://github.com/wayusei/FonDiDita) \n\n * [Servidor en heroku](https://fondidita.herokuapp.com/)",
            
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                }
            }
        },
        security: [
            {
              bearerAuth: []
            },
          ],
    },
    server: "localhost:3000/",
    apis: ["./routes/*.js"]
}

module.exports = options
