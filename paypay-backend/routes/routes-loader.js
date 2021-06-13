const path = require('path'),
  fs = require('fs');

const excluded = ['routes-loader.js',]
module.exports = (app, router) => {
  console.log('routes are synching...');
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && !excluded.includes(file))
    .forEach(routeLoaderFile => {
      // load route file and enable register routes
      const routes = require(`./${routeLoaderFile}`);
      routes(app, router);
    });
}