'use strict';
module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('Word', {
    item: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Word.associate = function(models) {
    // associations can be defined here
  };
  return Word;
};