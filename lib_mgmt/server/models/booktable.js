'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booktable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Booktable.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edition: DataTypes.STRING,
      publisher: DataTypes.STRING,
      summary: DataTypes.STRING,
      ISBN: {
        type: DataTypes.BIGINT,
      },
      genre: DataTypes.STRING,
      url: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: 'Booktable',
    }
  );
  return Booktable;
};

