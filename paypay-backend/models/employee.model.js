const { TABLE_EMPLOYEE_NAME } = require('../constants/model.constants');

module.exports = function (sequelize, DataTypes) {
  const T_Employee = sequelize.define(
    TABLE_EMPLOYEE_NAME,
    {
      Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        noUpdate: {
          readOnly: true
        }
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      LastName: DataTypes.STRING,
      Email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Designation: DataTypes.STRING,
    },
    {
      timestamps: false,
      paranoid: false,
      underscored: false,
      freezeTableName: true,
      classMethods: {
        associate: function (models) {
          // this.hasOne(models.T_Account_Credential, { as: 'credential', foreignKey: 'account_id' })
          // this.hasOne(models.T_Account_Settings, { as: 'settings', foreignKey: 'account_id' })
          // this.hasMany(models.T_Account_Members, { as: 'members', foreignKey: 'account_id' })
          // this.belongsTo(models.T_Organization, { as: 'organization' })
        }
      }
    }
  );

  return T_Employee;
}