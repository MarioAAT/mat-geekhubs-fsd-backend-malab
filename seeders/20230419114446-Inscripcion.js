'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inscripciones', [
      { id: 1, fecha_inscripcion: '2023-04-21', id_curso: 1, id_usuario: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, fecha_inscripcion: '2023-04-21', id_curso: 1, id_usuario: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, fecha_inscripcion: '2023-04-24', id_curso: 1, id_usuario: 4, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, fecha_inscripcion: '2023-04-24', id_curso: 1, id_usuario: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, fecha_inscripcion: '2023-04-20', id_curso: 3, id_usuario: 5, createdAt: new Date(), updatedAt: new Date() },
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
