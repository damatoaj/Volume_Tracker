'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.workout.belongsTo(models.user)
    }
  };
  workout.init({
    date: DataTypes.DATE,
    minutes: DataTypes.INTEGER,
    heartRate: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    volume: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workout',
  });
  return workout;
};