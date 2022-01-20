// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Question extends Model {}

// Question.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     q_text: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       unique: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//     post_id: {
//       model: "post",
//       key: "id",
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "vote",
//   }
// );

// module.exports = Question;
