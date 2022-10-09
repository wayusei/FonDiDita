<<<<<<< HEAD
=======

>>>>>>> 1e82b5128e57dedc501ad777662b40f95292c29b
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
<<<<<<< HEAD
                name: "Equipo-16 - GitHub repository",
=======
                name: "Equipo-16",
>>>>>>> 1e82b5128e57dedc501ad777662b40f95292c29b
                url: "https://github.com/wayusei/FonDiDita",
                email: ""
            },
        }
    },
<<<<<<< HEAD
    server: "localhost:3000/",
=======
>>>>>>> 1e82b5128e57dedc501ad777662b40f95292c29b
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

<<<<<<< HEAD
module.exports = options
=======
module.exports = options

>>>>>>> 1e82b5128e57dedc501ad777662b40f95292c29b
