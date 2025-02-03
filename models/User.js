'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Pastikan ini mengarah ke file db.js yang benar

class User extends Model {
    // Relasi antar model jika diperlukan, misalnya:
    static associate(models) {
        // Contoh relasi: User.hasMany(models.Post);
    }
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
    sequelize,  // Inisialisasi Sequelize
    modelName: 'User',  // Nama model yang digunakan di Sequelize
    tableName: 'Users',  // Nama tabel yang digunakan di database
    timestamps: true,    // Menambahkan createdAt dan updatedAt
});

module.exports = User;
