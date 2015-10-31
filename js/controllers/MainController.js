app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Book App';
  $scope.promo = 'Hello Angular JS';
  $scope.products = [
    {
      name: 'The Martian',
      price: 14.88,
      pubdate: new Date('2011', '9', '02'),
      cover: 'img/the_martian.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'How to fail at almost everything and still win big',
      price: 14.88,
      pubdate: new Date('2011', '9', '02'),
      cover: 'img/how_to_fail_and_win.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Default', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/default.jpg',
      likes: 0,
      dislikes: 0
    }   
  ]
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes -= 1;
  };
}]);

