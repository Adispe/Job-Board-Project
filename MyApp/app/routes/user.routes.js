const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/:id", user.findOne);

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.use("/api/user", router);
};

//   const user = require("../controllers/user.controller.js");

//   var router = require("express").Router();

//   // Create a new User
//   router.post("/", user.create);

//   // Retrieve all Users
//   router.get("/", user.findAll);

//   // Retrieve all published Users
//   // router.get("/published", user.findAllPublished);

//   // Retrieve a single User with id
//   router.get("/:id", user.findOne);

//   // Update a User with id
//   router.put("/:id", user.update);

//   // Delete a User with id
//   router.delete("/:id", user.delete);

//   // Delete all Users
//   router.delete("/", user.deleteAll);

//   app.use("/api/user", router);
// };
