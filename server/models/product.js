'use strict';
module.exports = function (sequelize, DataTypes) {

    var Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL(10, 2),
        cost: DataTypes.DECIMAL(10, 2),   
    });

    Product.associate = function (models) {
        models.Product.hasMany(models.SaleItem, {
            as: 'SaleItems',
            foreignKey: 'productId'
        });
    };

    return Product;
};