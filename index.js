// Init Vars
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Static crap
app.use(express.static('public', {
  extensions: ['html', 'htm']
}));

// Index
app.get('/', (req, res) => res.sendFile('public/index.html'));

// Removing extensions (manually, hopefully I can figure something out at a later time)
app.get('/blog',(req,res) => res.sendFile(path.join(__dirname + '/public/blog.html')));
app.get('/blog/01-01-2020',(req,res) => res.sendFile(path.join(__dirname + '/public/01-01-2020.html')));
app.get('/social',(req,res) => res.sendFile(path.join(__dirname + '/public/social.html')));
app.get('/projects',(req,res) => res.sendFile(path.join(__dirname + '/public/projects.html')));
app.get('/projects/released',(req,res) => res.sendFile(path.join(__dirname + '/public/projects/released.html')));
app.get('/projects/upcoming',(req,res) => res.sendFile(path.join(__dirname + '/public/projects/upcoming.html')));

// Error files
app.use(function(req,res) {
  res.status(404);
  res.sendFile(path.join(__dirname + '/public/error/404.html'));
});

app.use(function(req,res) {
  res.status(403);
  res.sendFile(path.join(__dirname + '/public/error/403.html'));
});

app.use(function(req,res) {
  res.status(408);
  res.sendFile(path.join(__dirname + '/public/error/408.html'));
});

app.use(function(req,res) {
  res.status(418);
  res.sendFile(path.join(__dirname + '/public/error/418.html'));
});

app.use(function(req,res) {
  res.status(500);
  res.sendFile(path.join(__dirname + '/public/error/500.html'));
});

app.use(function(req,res) {
  res.status(503);
  res.sendFile(path.join(__dirname + '/public/error/503.html'));
});

// Listen
app.listen(port, () => console.log('Server has started!'));