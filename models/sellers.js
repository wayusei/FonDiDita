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
    password_hash:{
        type: DataTypes.STRING
    },
    full_name:{
        type: DataTypes.STRING
    },
    account:{
        type: DataTypes.STRING
    },
    password_salt:{
        type: DataTypes.STRING
    },
},
{
    freezeTableName: true,
    timestamps:false
});


Sellers.createPassword = function(plainText) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(plainText, salt, 1000, 100, "sha512")
        .toString("hex");
    return {salt: salt, hash: hash}
}

Sellers.validatePassword = function(password, user_salt, user_hash) {
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 1000, 100, "sha512")
        .toString("hex");
    return user_hash === hash;
}

// Associations
/* Sellers.hasMany(Products, {
    foreignKey: 'seller_id'
});
Products.belongsTo(Sellers); */

module.exports = Sellers;