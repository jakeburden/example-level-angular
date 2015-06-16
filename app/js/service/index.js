const app = require('angular').module('BLAN')

app.factory('users', ['$http', require('./users')])
