const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');


const Orders_Details = sequelize.define('orders_details', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.STRING
    }
});

module.exports = Orders_Details;