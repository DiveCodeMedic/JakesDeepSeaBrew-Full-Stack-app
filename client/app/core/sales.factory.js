(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('salesFactory', salesFactory)

    salesFactory.$inject = ['$http'];

    function salesFactory($http) {
        var service = {
            getAll: getAll,
            //getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get('/api/sales')
                .then(function (response) {
                    return response.data
                });
        }

        function update(sale) {
            return $http
                .put('/api/sales/' + sale.id, sale)
                .then(function (response) {
                    return response.data;
                })
        }


        function remove(sale) {
            return $http
                .delete('/api/sales/' + sale.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
