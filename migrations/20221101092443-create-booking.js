'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookedby: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sourceDestination: {
        allowNull: false,
        type: Sequelize.STRING
      },
      startedAt: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endedAt: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      captianId:{
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Captians',
          key:'id'
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
    await queryInterface.dropTable('bookings');
  }
};