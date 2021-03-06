'use strict';
module.exports = function (sequelize, DataTypes) {

    var SaleItem = sequelize.define('SaleItem', {
      saleId:  {
          type: DataTypes.INTEGER,
          model: 'Sale',
          key: 'id'
      }, 
      productId:  {
          type: DataTypes.INTEGER,
          model: 'Product',
          key: 'id'
      },
      quanity: DataTypes.INTEGER
    });

    SaleItem.associate = function (models) {
  
    };

    return SaleItem;
};
