(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('salesItemFactory', salesItemFactory)

    salesItemFactory.$inject = ['$http'];

    function salesItemFactory($http) {
        var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get('/api/salesItems')
                .then(function (response) {

                    return response.data
                });
        }

        function update(salesitem) {
            return $http
                .put('/api/salesItems/' + salesitem.id, salesitem)
                .then(function (response) {
                    return response.data;
                })
        }


        function remove(salesitem) {
            return $http
                .delete('/api/salesItems/' + salesitem.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
