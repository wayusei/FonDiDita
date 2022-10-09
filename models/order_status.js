const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Orders = require('./orders');


const OrderStatus = sequelize.define('order_status', {
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
},
{
    freezeTableName: true,
    timestamps:false
});

module.exports = OrderStatus;