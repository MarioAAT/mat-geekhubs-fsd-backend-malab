'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profesional', [
      { id: 1, nombre: "Maite", apellido: "Larena Colon", email: "maite@larena.com", especialidad: "Raku", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nombre: "Xoan", apellido: "Viqueira", email: "xoan@viqueira.com", especialidad: "Escultura", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nombre: "Jazzmin", apellido: "Valderrama", email: "jazz@valde.com", especialidad: "Alfareria", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nombre: "Miguel", apellido: "Sanchez", email: "miguel@sanchez.com", especialidad: "Ceramica de alta teperatura", createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nombre: "Graciela", apellido: "olio", email: "graciela@olio.com", especialidad: "Porcelana", createdAt: new Date(), updatedAt: new Date() },
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
