'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('orders', {
    clientName: DataTypes.STRING,
    table: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};