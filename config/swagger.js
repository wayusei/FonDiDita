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
                name: "Equipo-16",
                url: "https://github.com/wayusei/FonDiDita",
                email: ""
            },
        }
    },
    apis: ["./routes/*.js"],
    components: {
        securitySchemes: {
            Authorization: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                value: "Bearer <JWT token here>"
            }
        }/* ,
        schemas: {
            products: {
                type: "object",
                required: ["id","name","price","description","image","thumbnail","category","seller_id"],
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    price: {
                        type: "integer"
                    },
                    description: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    thumbnail: {
                        type: "string"
                    },
                    category: {
                        type: "integer"
                    },
                    seller_id: {
                        type: "integer"
                    }
                }
            }
        } */
    }
}

module.exports = options

