const { Sequelize } = require('sequelize');

// Menggunakan Sequelize untuk terhubung ke database menggunakan konfigurasi dari config.json
const sequelize = new Sequelize(
  'express_seqeulize', // Nama database
  'root',               // Username database
  '',                   // Password (kosong jika tidak ada password)
  {
    host: '127.0.0.1',   // Alamat host (localhost)
    dialect: 'mysql',    // Jenis database yang digunakan (mysql)
    logging: false,      // Menonaktifkan logging query SQL (bisa disesuaikan)
  }
);

module.exports = sequelize;
