const app = require('angular').module('BLAN')

app.controller('usersController', ['$scope', 'users', require('./usersController')])
