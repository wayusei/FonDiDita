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
    description:{
        type: DataTypes.STRING
    }
},
{
    freezeTableName: true,
    timestamps:false
});


module.exports = Categories;