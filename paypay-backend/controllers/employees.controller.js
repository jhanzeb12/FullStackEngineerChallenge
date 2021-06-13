const EmployeesController = {
  getById: async (req, res) => {
    const empModel = req.dbModel;
    const employee = await empModel.findByPk(req.params.employeeId);
    return res.send(JSON.stringify(employee));
  },
  all: async (req, res) => {
    const empModel = req.dbModel;
    const employeesList = await empModel.findAll();
    return res.send(JSON.stringify(employeesList));
  },
  create: async ({ body, dbModel }, res) => {
    const emp = await dbModel.create(body).catch(err => {
      return res.send(JSON.stringify(err));
    });

    if (emp) {
      return res.send(JSON.stringify(emp));
    }
  },
  delete: async ({ params, dbModel }, res) => { 
    await dbModel.destroy({
      where: {
        Id: params.employeeId
      }
    }).catch(err => {
      return res.send(false);
    });

    return res.send(true);
  },
  update: async ({ body, dbModel }, res) => {
    const emp = await dbModel.update(body, { where: {
      Id: body.Id
    }}).catch(err => {
      return res.send(JSON.stringify(err));
    });

    if (emp) {
      return res.send(JSON.stringify(emp));
    }
  },
}

module.exports = EmployeesController;