// Init Vars
const express = require('express')
const app = express()
var path = require('path')
const port = 3000

// Static crap
app.use(express.static(__dirname, {
    extensions: ['html', 'htm']
}));

// Index
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

// Error files
app.use(function(req,res) {
  res.status(400)
  res.sendFile(path.join(__dirname + '/error/404.html'))
})

app.use(function(error,req,res,next) {
  res.status(500)
  res.sendFile(path.join(__dirname + '/error/500.html'))
})

// Listen
app.listen(port)