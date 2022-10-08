const options ={
    swaggerDefinition:{
        info:{
            version:"1.0.0",
            title: "Fondidita"
        },
        servers:[
            {
                url:"http:localhost:3000/customers"

            }
        ],
    
    },
    
    
    apis:[".routes/customers.js"]
}

module.exports =options;