const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  define: {
    freezeTableName: 1,
    timestamps: false,
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.job_advertisement = require("./job-advertisement.model.js")(
  sequelize,
  Sequelize
);
db.job_application = require("./job-application.model.js")(
  sequelize,
  Sequelize
);

db.role.belongsToMany(db.user, {
  through: "user_role",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_role",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.company = require("./company.model.js")(sequelize, Sequelize);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
