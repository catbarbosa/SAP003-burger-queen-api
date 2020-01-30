'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    clientName: DataTypes.STRING,
    table: DataTypes.NUMBER,
    status: DataTypes.STRING,
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};