'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert('dogs', [
        { name: 'Asdf', color: 'red', tail_length: 6, weight: 20 },
        { name: 'Bnm', color: 'black&white', tail_length: 8, weight: 12 },
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
