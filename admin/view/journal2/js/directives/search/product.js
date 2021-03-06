define(['./../module'], function (module) {
    module
        .directive('productSearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/catalog/products', 'product_id', 'Select products...');
                }
            };
        }]);
});
