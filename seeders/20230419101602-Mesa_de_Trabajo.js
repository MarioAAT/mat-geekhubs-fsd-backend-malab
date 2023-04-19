'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mesas_de_trabajo', [
      { id: 1, nombre: "Biehne", tamaño: '120cm x 120cm', descripcion: 'La mesa de trabajo tiene altura ajustable, cuenta con caballetes para escultura. 4 bloques de repisa de 70cm x 57cm', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nombre: "Eandrade", tamaño: '120cm x 120cm', descripcion: 'La mesa de trabajo tiene altura ajustable, cuenta con caballetes para escultura. 4 bloques de repisa de 70cm x 57cm', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nombre: "Hun Chung", tamaño: '200cm x 300cm', descripcion: 'Esta mesa de trabajo es de las mas grandes con las que contamos, tiene altura ajustable y cuenta con caballetes para escultura. 4 bloques de repisa de 70cm x 230cm', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nombre: "Baranga", tamaño: '100cm x 80cm', descripcion: 'Mesa de trabajo con altura ajustable. 1 bloque de repisa 70cm x 115cm ', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nombre: "MacDowell", tamaño: '150cm x 180cm', descripcion: 'Mesa de trabajo con altura ajustable, cuenta con caballetes para escultura. 2 bloques de repisa de 70cm x 115cm', createdAt: new Date(), updatedAt: new Date() },      
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
