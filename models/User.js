const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid'); // Mengimpor library UUID v4
const sequelize = require('../config/db'); // Pastikan file konfigurasi Sequelize sesuai

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID, // Menentukan tipe data UUID untuk id
        defaultValue: uuidv4, // Menetapkan UUID v4 sebagai nilai default
        primaryKey: true,      // Menetapkan id sebagai primary key
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  tableName: 'Users',  // Menentukan nama tabel
  timestamps: true,    // Menyertakan createdAt dan updatedAt
});

module.exports = User;
