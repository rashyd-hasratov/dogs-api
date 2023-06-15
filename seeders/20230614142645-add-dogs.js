'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert('dogs', [
        { name: 'Neo', color: 'red & amber', tail_length: 22, weight: 32 },
        { name: 'Jessy', color: 'black & white', tail_length: 7, weight: 14 },
      ]);
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface) {
    try {
      await queryInterface.bulkDelete('dogs', null, {});
    } catch (error) {
      console.log(error);
    }
  }
};
