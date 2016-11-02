const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const HOME = path.join( __dirname, '..' );
const DIST = path.join( HOME, '/dist' );

app.set('port', (process.env.PORT || 5000));

app.use('/dist', express.static(DIST));
app.use((req, res) => {
  res.sendfile(path.join( HOME, 'index.html' ));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
