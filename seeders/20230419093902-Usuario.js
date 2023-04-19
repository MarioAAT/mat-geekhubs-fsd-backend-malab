'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      { id: 1, nombre: "Maria", apellido: "Thuillier Larena", email: "maria@thuillier.com", telefono: "640938265", password: "12345", id_rol: 1,createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nombre: "Alvaro", apellido: "De la Merced", email: "alvaro@merced.com", telefono: "640649236", password: "12345", id_rol: 2,createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nombre: "Celia", apellido: "Robles Cabañinas", email: "celia@robles.com", telefono: "640164978", password: "12345", id_rol: 2,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nombre: "Matilde", apellido: "Boix", email: "mati@boix.com", telefono: "640460318", password: "12345", id_rol: 2,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nombre: "Mario Alberto", apellido: "Aguilar Torres", email: "mario@aguilar.com", telefono: "640634987", password: "12345", id_rol: 2,createdAt: new Date(), updatedAt: new Date() },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
