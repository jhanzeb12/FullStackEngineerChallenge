const EmployeesController = require('../controllers/employees.controller');
const { TABLE_EMPLOYEE_NAME } = require('../constants/model.constants');

const EmployeesRoutes = (app, router) => {
  // setting middlewares to load employees model
  app.use('/employees/*', (req, res, next) => {
    req.dbModel = app.db[TABLE_EMPLOYEE_NAME];
    next();
  });

  app.get('/employees/all', EmployeesController.all);
  app.route('/employees/:employeeId')
    .get(EmployeesController.getById)
    .delete(EmployeesController.delete);
  app.post('/employees/create', EmployeesController.create);
  app.post('/employees/update', EmployeesController.update);

  return router;
}

module.exports = EmployeesRoutes;