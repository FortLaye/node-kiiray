'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users',
        [
            {
              prenom: 'Abdoulaye',
              nom: 'Mangane',
              email: 'abmangane14@gmail.com',
              password: 'passer',
              phone: '770416944',
              role: 'AGENT',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              prenom: 'Mohamed',
              nom: 'Ba',
              email: 'mb116@gmail.com',
              password: 'passer',
              phone: '783703310',
              role: 'AGENT',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              prenom: 'Seydou',
              nom: 'Mané',
              email: 'suport1@gmail.com',
              password: 'passer',
              phone: '774251812',
              role: 'AGENT',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              prenom: 'Serigne Modou',
              nom: 'Ndiaye',
              email: 'ndiayesmodou@gmail.com',
              password: 'passer',
              phone: '773255524',
              role: 'AGENT',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              prenom: 'Abdoulaye',
              nom: 'Sall',
              email: 'gallebaba@gmail.com',
              password: 'passer',
              phone: '778532104',
              role: 'AGENT',
              createdAt: new Date(),
              updatedAt: new Date(),
            }
        ])
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
