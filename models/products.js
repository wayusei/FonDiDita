const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Orders_Details = require('./orders_details');


const Products = sequelize.define('products', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    thumbnail:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.INTEGER
    },
    seller_id:{ // NOTA: Este parece no necesitarce al hacerce la asociación
        type: DataTypes.INTEGER
    }
});

// Associations
Products.hasMany(Orders_Details, {
    foreignKey: 'product_id'
});
Orders_Details.belongsTo(Products);

module.exports = Products;