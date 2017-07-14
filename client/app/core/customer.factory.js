(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('customerFactory', customerFactory)

    customerFactory.$inject = ['$http'];

    function customerFactory($http) {
        var service = {
            getAll: getAll,
            // getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get('/api/customers')
                .then(function (response) {
                    // console.log(response)
                    return response.data;
                });
        };

        function getById(id) {
            return $http
                .get('/api/customers/' + id)
                .then(function (response) {
                    return response.data
                });
        }

        function create(customer) {
            return $http
                .get('/api/customers/', customer)
                .then(function (response) {
                    return response.data
                });
        };

        function update(customer) {
            return $http
                .put('/api/customers/' + customer.id, customer)
                .then(function (response) {
                    return response.data;
                });
        };


        function remove(customer) {
            return $http
                .delete('/api/customers/' + customer.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
