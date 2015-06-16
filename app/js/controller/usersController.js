module.exports = function ($scope, users) {
  users.success(function (data) {
    $scope.users = data
    console.log($scope.users)
  })
}
