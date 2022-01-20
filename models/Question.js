const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer3: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer4: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "question",
  }
);

module.exports = Question;
