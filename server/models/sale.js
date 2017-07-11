'use strict';
module.exports = function (sequelize, DataTypes) {

    var Sale = sequelize.define('Sale', {
      date: DataTypes.Date, 
      totalPrice: DataTypes.Date,
      customerId: {
          type: Datatypes.INTEGER,
          model: 'Customer',
          key: 'id'
      }
    });

    Sale.associate = function (models) {
    models.Sale.hasMany(models.SaleItem, {
            as: 'SaleItems',
            foreignKey: 'saleId'
        });
    };

    return Sale;
};