'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const words = JSON.parse(fs.readFileSync('./resources/words.json', 'utf8'));

    return queryInterface.bulkInsert('Words', words, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Words', null, {});
  }
};
