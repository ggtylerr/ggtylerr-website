// Init Vars
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Remove .html extensions
const fs = require('fs');
let pubdir = __dirname + '/public';

app.use((req, res, next) => {
  if (req.path.indexOf('.') === -1) {
    let file = pubdir + req.path + '.html';
    fs.exists(file, function(exists) {
      if (exists)
        req.url += '.html';
      next();
    });
  }
  else
    next();
});

app.use(express.static(pubdir, {
  extensions: ['html', 'htm']
}));

// Redirect of files
app.get('/', (req, res) => res.sendFile(`${pubdir}/index.html`));
app.get('/blog', (req, res) => res.sendFile(`${pubdir}/blog/blog.html`));
app.get('/projects', (req, res) => res.sendFile(`${pubdir}/projects/projects.html`));
app.get('/social', (req, res) => res.sendFile(`${pubdir}/social/social.html`));
app.get('/other', (req, res) => res.sendFile(`${pubdir}/other/other.html`));
app.get('/dsabot', (req, res) => res.sendFile(`${pubdir}/dsabot/dsabot.html`));
app.get('/dsabot-mobile', (req, res) => res.sendFile(`${pubdir}/dsabot/dsabot-mobile.html`));

// Index
app.get('/', (req, res) => res.sendFile('public/index.html'));

// Error files
app.use((req,res) => {
  res.status(404);
  res.sendFile(path.join(__dirname + '/public/error/404.html'));
});

app.use((req,res) => {
  res.status(403);
  res.sendFile(path.join(__dirname + '/public/error/403.html'));
});

app.use((req,res) => {
  res.status(408);
  res.sendFile(path.join(__dirname + '/public/error/408.html'));
});

app.use((req,res) => {
  res.status(418);
  res.sendFile(path.join(__dirname + '/public/error/418.html'));
});

app.use((req,res) => {
  res.status(500);
  res.sendFile(path.join(__dirname + '/public/error/500.html'));
});

app.use((req,res) => {
  res.status(503);
  res.sendFile(path.join(__dirname + '/public/error/503.html'));
});

// Listen
app.listen(port, () => console.log('Server has started!'));