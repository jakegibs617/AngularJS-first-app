app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Book App';
  $scope.promo = 'Hello Angular JS';
  $scope.product = {
    name: 'The Martian',
    price: 14.88,
    pubdate: new Date('2011', '9', '02')
  }
}]);