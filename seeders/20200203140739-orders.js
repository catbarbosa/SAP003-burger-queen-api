"use strict";
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      clientName: "Catarina",
      table: 1,
      status: "Pendente",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};