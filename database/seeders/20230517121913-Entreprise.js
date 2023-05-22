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
    await queryInterface.bulkInsert('Entreprises', [
      {
        nom: "Ridwan Group",
        adresse: "Keur Yoff",
        ninea: "123456789A",
        registrecom: "SNDKR2020B3918",
        phone: "33 820 20 98",
        region: "Dakar",
        ville: "Dakar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: "Patisen",
        adresse: "Colobane",
        ninea: "123456789P",
        registrecom: "SNDKR2015B3029",
        phone: "33 849 55 55",
        region: "Dakar",
        ville: "Dakar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: "Huawei",
        adresse: "Nord Foire",
        ninea: "00Z676789H",
        registrecom: "SNDKR2015B2229",
        phone: "33 849 55 55",
        region: "Dakar",
        ville: "Dakar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

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
