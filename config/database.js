
// db connection
const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
module.exports = new Sequelize("hotel", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
