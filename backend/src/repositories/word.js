'use strict';
const db = require('../models');

const WordRepository = {
  findAll: async () => {
    return db.Word.findAll();
  }
}

module.exports = WordRepository;