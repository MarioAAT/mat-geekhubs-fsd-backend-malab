'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservas', [
      { id: 1, fecha_reserva: '2023-05-21', hora_inicio: '17:00:00', hora_fin: '19:00:00', id_usuario: 2, id_mesa: 1,createdAt: new Date(), updatedAt: new Date() },
      { id: 2, fecha_reserva: '2023-05-21', hora_inicio: '11:00:00', hora_fin: '13:00:00', id_usuario: 3, id_mesa: 2,createdAt: new Date(), updatedAt: new Date() },
      { id: 3, fecha_reserva: '2023-05-25', hora_inicio: '10:00:00', hora_fin: '14:00:00', id_usuario: 4, id_mesa: 3,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, fecha_reserva: '2023-05-20', hora_inicio: '17:00:00', hora_fin: '20:00:00', id_usuario: 5, id_mesa: 4,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, fecha_reserva: '2023-05-29', hora_inicio: '18:00:00', hora_fin: '21:00:00', id_usuario: 2, id_mesa: 5,createdAt: new Date(), updatedAt: new Date() },
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
