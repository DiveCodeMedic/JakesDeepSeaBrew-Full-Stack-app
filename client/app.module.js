(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules
        'app.core',
        'app.customer',
        'app.dashboard',
        'app.product',
        'app.sales',

        // 3rd Party Modules
        'ui.router'

    ]).config(appConfig);

appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function  appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController as dashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.template.html'
        });
        $stateProvider.state('customer-grid', {
            url: '/customer-grid',
            controller: 'CustomerGridController as customerGridCtrl',
            templateUrl: 'app/customer/customer.grid.template.html'
        });
        $stateProvider.state('product-detail', {
            url: '/product-detail',
            controller: 'ProductDetailController as productDetailCtrl',
            templateUrl: 'app/product/product.grid.template.html'
        });
        $stateProvider.state('sales-detail', {
            url: '/sales-detail',
            controller: 'SalesDetailController as salesDetailCtrl',
            templateUrl: 'app/sales/sales.grid.template.html'
        });
    }
})();
