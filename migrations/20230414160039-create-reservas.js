'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_reserva: {
        type: Sequelize.DATE
      },
      hora_inicio: {
        type: Sequelize.TIME
      },
      hora_fin: {
        type: Sequelize.TIME
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      id_mesa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mesas_de_trabajo',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};