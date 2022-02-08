module.exports = (sequelize, Sequelize) => {
  const Job_application = sequelize.define("job_application", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_jobseeker: {
      type: Sequelize.INTEGER,
    },
    id_hr: {
      type: Sequelize.INTEGER,
    },
    id_advertisement: {
      type: Sequelize.INTEGER,
    },
    jobseeker_messages: {
      type: Sequelize.STRING,
    },
    advertiser_messages: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    age: {
      type: Sequelize.STRING,
    },
    work_experience: {
      type: Sequelize.STRING,
    },
    education: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
  });

  return Job_application;
};
