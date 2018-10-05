let app = require('./script/config/server');

let homeRoute = require('./script/routes/home-routes');
homeRoute(app);

app.listen('3000', () => {
  console.log("Server ON");
});
