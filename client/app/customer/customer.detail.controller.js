(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerDetailController', CustomerDetailController)

    CustomerDetailController.$inject = ['customerFactory', '$stateParams','$state'];

    function CustomerDetailController(customerFactory, $stateParams,$state) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;

        activate();

        function activate(){
            if ($stateParams.id){
                customerFactory
                    .getById($stateParams.id)
                    .then(function (customer) {
                        vm.customer = customer;
                    });
            } else {
                vm.customer = {};
            }
        }
        
        function save(customer) {
            customerFactory
            .update(customer)
            .then(function() {
                alert("Good Job Deep Sea!");
                $state.go('customer-grid')
            })
        }
    }
})();
