const http = require('http')
const router = require('routes')()
const concat = require('concat-stream')
const ecstatic = require('ecstatic')
const st = ecstatic({
  root: __dirname + '/app/views',
  gzip: true
})

const level = require('level')
const db = level('db', { valueEncoding: 'json' })

router.addRoute('/get/users', function (req, res) {
  db.createReadStream()
    .pipe(concat(function (data) {
      var buf = new Buffer(JSON.stringify(data))
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.setHeader("Content-Length", buf.length)
      res.end(buf)
    }))
})

var server = http.createServer( function (req, res) {
  var match = router.match(req.url)
  if (match) match.fn(req, res, match.params)
  else st(req, res)
})

server.listen(9090, function () {
  console.log('server running at http://localhost:9090')
})
