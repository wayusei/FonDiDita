const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');


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

module.exports = Customers;
