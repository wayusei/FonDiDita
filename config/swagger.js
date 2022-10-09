// configure the Swagger UI
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
        }
    },
    server: "localhost:3000/",
    apis: ["./routes/*.js"],
    components: {
        securitySchemes: {
            Authorization: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                value: "Bearer <JWT token here>"
            }
        }
    }
}

module.exports = options;