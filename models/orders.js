const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Orders_Details = require('./orders_details');


const Orders = sequelize.define('orders', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    customer_id:{
        type: DataTypes.INTEGER
    },
    ammount:{
        type: DataTypes.INTEGER
    },
    shipping_address:{
        type: DataTypes.STRING
    },
    order_address: {
        type: DataTypes.STRING
    },
    order_email: {
        type: DataTypes.STRING
    },
    order_date: {
        type: DataTypes.STRING
    },
    order_status: {
        type: DataTypes.INTEGER
    }
});

// Associations
Orders.hasMany(Orders_Details, {
    foreignKey: 'order_id'
});
Orders_Details.belongsTo(Orders);

module.exports = Orders;