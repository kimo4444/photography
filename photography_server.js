const express = require('express');
const app =  express();
app.disable('x-powered-by');
const helmet = require('helmet');
const compression = require('compression');
const path  = require('path');
const publicPath = path.join(__dirname, '.', 'public');
const robots = require('express-robots');
app.use(robots(__dirname + '/robots.txt'));


app.use(helmet());
app.use(compression());
app.use(express.static(publicPath));


app.get('*', (req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(process.env.PORT || 8003, () => {
  console.log('running');
});
