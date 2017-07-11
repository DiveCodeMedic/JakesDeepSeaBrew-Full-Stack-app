'use strict';
module.exports = function (sequelize, DataTypes) {

    var Customer = sequelize.define('Customer', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        telephone: DataTypes.STRING,
        address1: DataType.STRING,
        address2:  DataType.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        isVip: DataTypes.BOOLEAN   
    });

    Customer.associate = function (models) {
        models.Customer.hasMany(models.Sale,{
            as: 'Sales',
            foreignKey: 'customerId'
        });
    };

    return Customer;
};