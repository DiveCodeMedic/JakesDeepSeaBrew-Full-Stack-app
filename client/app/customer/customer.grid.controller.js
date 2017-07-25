(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerGridController', CustomerGridController)

    CustomerGridController.$inject = ['customerFactory'];

    function CustomerGridController(customerFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {
            customerFactory
                .getAll()
                .then(function(customers){
                    vm.customers = customers;
                });
        }
    }
})();
