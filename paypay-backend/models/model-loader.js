"use strict";

const fs = require('fs');
const path = require('path');
const sequelizeNoUpdateAttributes = require('sequelize-noupdate-attributes');
const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {};
const sequelize = new Sequelize(config.database.name,
  config.database.userName,
  config.database.password, config.sequelize);

// plugin to allow read only attributes on models
sequelizeNoUpdateAttributes(sequelize);

const excluded = ['model-loader.js'];
fs.readdirSync(__dirname)
  .filter(file => file.indexOf(".") !== 0 && !excluded.includes(file))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

sequelize.sync().then(() => {
  Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;