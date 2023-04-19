'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cursos', [
      { id: 1, nombre_curso: "Diseño ceramico", descripcion: 'Curso enfocado al modelaje de piezas basicas', id_usuario: null, id_profesional: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nombre_curso: "Ceramica y Vidrio", descripcion: 'Curso de introducción al modelado del vidrio', id_usuario: null, id_profesional: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nombre_curso: "Ceramica de alto rendimiento", descripcion: 'Curso especializado en la técnica y creacion de piezas de alto rendimiento', id_usuario: null, id_profesional: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nombre_curso: "Introduccion al esmaltado", descripcion: 'Curso de introducción al esmaltado de piezas ceramicas', id_usuario: 4, id_profesional: null, createdAt: new Date(), updatedAt: new Date() },
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
