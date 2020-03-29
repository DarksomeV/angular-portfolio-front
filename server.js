//Install express server
const express = require('express');
const path = require('path');
const locale = require('locale');
const app = express();
const supportedLocales = ['en', 'ru'];
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/portfolio'));
app.use(locale(supportedLocales));
app.get('/*', function(req,res) {
  const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  const locale = matches && supportedLocales.indexOf(matches[1]) !== -1 ? matches[1] : req.locale;
  res.sendFile(path.join(__dirname+'/dist/portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
