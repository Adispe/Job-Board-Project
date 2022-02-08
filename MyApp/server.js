const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
const Role = db.role;
app.use(express.static(process.cwd() + "/Angular12Crud/dist/Angular12Crud"));

db.sequelize.sync().then(() => {
  initial();
});
// { force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/Angular12Crud/dist/Angular12Crud/index.html");
});

require("./app/routes/job_advertisement.routes")(app);
require("./app/routes/job_application.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/company.routes")(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
