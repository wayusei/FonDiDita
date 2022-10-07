const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Products = require('./products');


const Categories = sequelize.define('categories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    /* category_id:{
        type: DataTypes.STRING
    }, */ // NOTA: Este no aparece en postgres o no lo veo
    description:{
        type: DataTypes.STRING
    }
});

// Associations
Categories.hasMany(Products, {
    foreignKey: 'category'
});
Products.belongsTo(Categories);

module.exports = Categories;