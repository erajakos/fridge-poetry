'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    item: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    timestamps: false,
  });
  
  return Word;
};