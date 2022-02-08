module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    education: {
      type: Sequelize.STRING,
    },
    work_experience: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
// module.exports = (sequelize, Sequelize) => {
//   const User = sequelize.define("user", {
//     username: {
//       type: Sequelize.STRING,
//     },
//     email: {
//       type: Sequelize.STRING,
//     },
//   });
//   return User;
// };
