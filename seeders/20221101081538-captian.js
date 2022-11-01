'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Captians', [{
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   isBooked: true,
    //   captianLocation:"xyz",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   firstName: 'Jack',
    //   lastName: 'Daniels',
    //   isBooked: true,
    //   captianLocation:"abc",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   firstName: 'Mark',
    //   lastName: 'Toe',
    //   isBooked: false,
    //   captianLocation:"def",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   firstName: 'Milky',
    //   lastName: 'Way',
    //   isBooked: false,
    //   captianLocation:"jkl",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }])
    await queryInterface.bulkInsert('bookings', [{
      bookedby: 'Aman',
      sourceDestination: 'Doe',
      startedAt: 1234,
      endedAt:1567,
      captianId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bookedby: 'Rahul',
      sourceDestination: 'Maddy',
      startedAt: 1678,
      endedAt:1890,
      captianId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
