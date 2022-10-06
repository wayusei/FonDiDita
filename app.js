



//const {Sequelize, DataTypes} = require ('sequelize');
import {Sequelize, DataTypes, Model} from 'sequelize';


///db, username, password
const sequelize = new Sequelize('fondidita', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres' 
});

async function connectToPostgres(){
    const sequelize=new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres' 
    });
    try{ 
        await sequelize.authenticate();
        console.log("Connection");
        //return sequelize;
    }catch(error){
        console.error("error");
    }
}

//const sequelize= connectToPostgres();

class Customers extends Model{
  
    
}

Customers.init(
    {
    id: {type: DataTypes.INTEGER,primaryKey:true},
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    
    password: DataTypes.INTEGER,
    full_name: DataTypes.INTEGER,
    billing_address: DataTypes.INTEGER,
    default_shipping_address: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
    },
    {
        sequelize,
        modelName:'customers',
        timestamps:false,
        freezeTableName: true
    }
);


const results = await Customers.findAll();
//console.log(results);
results.forEach(data=> console.log(data.username));
//module.exports = { authenticate };

////////////


//const sequelize = new Sequelize('sqlite:db.sqlite3');
/*
const user = sequelize.define("user",{
    id: DataTypes.INTEGER,
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    
    estatus: DataTypes.INTEGER,
    tipousuario: DataTypes.INTEGER
});*/


/*const descripcion = sequelize.define("descripcion",{
    
    descripciones: DataTypes.STRING
   
});


const Prod= sequelize.define("producto",{
    nombre: DataTypes.STRING,
    descripciones: DataTypes.STRING,
    precio: { 
        type: DataTypes.INTEGER, 
        allowNull: false }
   
});

user.hasMany(venta);
venta.belongsTo(user);

venta.hasOne(descripcion);

await user.sync();
await venta.sync();
await descripcion.sync();
await Prod.sync();
/*
/////insert
//await sequelize.sync({force:true});

user.create({
    nombre:"Yo",
    correo:"sergio@mail.com",
    edad: 38
})*/

/*const producto = await Prod.create({
    nombre:"pan",
    descripciones:"pan muerto",
    precio:200,

})*/

//const resultado= await Prod.findAll();
/*
const resultado= await Prod.findAll( {
    limit:1,
    order:['precio'],
   //where: {nombre:'pan'}
});

const ventas = await venta.create({
    fecha:Date.now()

})

resultado.forEach(producto=> console.log(producto.nombre));

Prod.update(
    { 
    nombre: "Pan dulce"
    }, 
    {
        where: {nombre:"pan"} 
});


const borrado = await Prod.destroy({
    where: {
        nombre:"Pan"
    }
});
console.log(borrado);


//const usuarios = await user.findAll();
//const usuarios = await user.findByPk(1);
//console.log(usuarios);*/