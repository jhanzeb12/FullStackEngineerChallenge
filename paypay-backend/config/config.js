const dbHost = 'localhost';
module.exports = {
  PORT: 1234,
  sequelize: {
    dialect: 'mysql',
    host: dbHost,
    pool: {
      max: 1,
      min: 1,
      idle: 5
    },
    query: {
      raw: true
    }
  },
  database: {
    name: 'paypay',
    userName: 'root',
    password: ''
  },
};