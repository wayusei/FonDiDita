const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Products = require('./products');


const Sellers = sequelize.define('sellers', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    full_name:{
        type: DataTypes.STRING
    },
    account:{
        type: DataTypes.STRING
    }
});

// Associations
Sellers.hasMany(Products, {
    foreignKey: 'seller_id'
});
Products.belongsTo(Sellers);

module.exports = Sellers;