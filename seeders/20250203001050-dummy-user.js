'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john@example.com',  // Pastikan email unik
        password: 'password123',  // Pastikan password terisi
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',  // Pastikan email unik
        password: 'password456',  // Pastikan password terisi
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
