const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Orders = require('./orders');


const Order_Status = sequelize.define('order_status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
});

// Associations
Order_Status.hasMany(Orders, {
    foreignKey: 'order_status_id'
});
Orders.belongsTo(Order_Status);

module.exports = Order_Status;