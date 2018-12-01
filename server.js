var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get('/', function(req, res) {
  res.end('ok')
})

app.post('/', function(req, res) {
  res.json(req.body)
})

app.listen(3003, function() {
  console.log('server start at 3000')
})
module.exports = app
