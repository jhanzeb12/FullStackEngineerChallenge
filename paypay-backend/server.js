const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes-loader');
const init = require('./core/init-db');
const config = require('./config/config');

var app = new express();
const router = express.Router();

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*'
}));

init().then(resp => {
  routes(app, router);
  // can be moved to some middleware once authorization/ authentication stuff is in places
  const modelLoader = require('./models/model-loader');
  if (modelLoader) {
    app['db'] = modelLoader;
  }

  app.listen(config.PORT, () => console.log(`App is runnig on ${config.PORT}`))
});

