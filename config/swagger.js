const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Fondidita API",
            version: "1.0.0",
            description:
                "Este es un CRUD API de la F2 de Bedu hecho con Express y documentado con Swagger",
            contact: {
                name: "Equipo-16 - GitHub repository",
                url: "https://github.com/wayusei/FonDiDita"
            },
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