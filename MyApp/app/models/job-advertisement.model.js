module.exports = (sequelize, Sequelize) => {
  const Job_advertisement = sequelize.define("job_advertisement", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: Sequelize.STRING,
    },
    id_user: {
      type: Sequelize.BOOLEAN,
    },
    name: {
      type: Sequelize.STRING,
    },
    contract: {
      type: Sequelize.STRING,
    },
    localisation: {
      type: Sequelize.STRING,
    },
    short_description: {
      type: Sequelize.STRING,
    },
    full_description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Job_advertisement;
};
