const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');


class Customers extends Model{
  
    
}

Customers.init(
    {
    id: {type: DataTypes.INTEGER,primaryKey:true},
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    
    password_hash: DataTypes.STRING,
    full_name: DataTypes.STRING,
    billing_address: DataTypes.STRING,
    default_shipping_address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password_salt: DataTypes.STRING,
    },
    {
        sequelize,
        modelName:'customers',
        timestamps:false,
        freezeTableName: true
    }
);


Customers.createPassword = function(plainText) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(plainText, salt, 1000, 100, "sha512")
        .toString("hex");
    return {salt: salt, hash: hash}
}

Customers.validatePassword = function(password, user_salt, user_hash) {
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 1000, 100, "sha512")
        .toString("hex");
    return user_hash === hash;
}



Customers.generateJWT = function(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60); // En 2 meses

    return jwt.sign({
        user: user.username,
        exp: parseInt(exp.getTime() / 1000) // En segundos
    }, secret);
}


module.exports = Customers;
