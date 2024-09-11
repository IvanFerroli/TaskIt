const { DataTypes } = require('sequelize');
const sequelize = require('../config/authDataBase');

const User = sequelize.define('users', {
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
