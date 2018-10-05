let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

module.exports = app;
