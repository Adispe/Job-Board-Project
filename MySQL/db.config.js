module.exports = {
  HOST: "localhost",
  USER: "disperati",
  PASSWORD: "P-47santa",
  DB: "job_board",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};