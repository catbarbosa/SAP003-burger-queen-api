'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    productId: DataTypes.STRING,
    aditionalId: DataTypes.STRING,
    optionId: DataTypes.STRING,

  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};