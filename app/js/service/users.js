module.exports = function ($http) {
  return $http.get('/get/users')
              .success(function (data) {
                return data
              })
              .error(function (err) {
                return err
              })
}
