module.exports = (app) => {
  const job_advertisement = require("../controllers/job-advertisement.controller.js");

  var router = require("express").Router();

  // Create a new Job ad
  router.post("/", job_advertisement.create);

  // Retrieve all Job ads
  router.get("/", job_advertisement.findAll);

  // Retrieve all published Job ads
  router.get("/published", job_advertisement.findAllPublished);

  // Retrieve a single Job ad with id
  router.get("/:id", job_advertisement.findOne);

  // Update a Job ad with id
  router.put("/:id", job_advertisement.update);

  // Delete a Job ad with id
  router.delete("/:id", job_advertisement.delete);

  // Delete all Job ads
  router.delete("/", job_advertisement.deleteAll);

  app.use("/api/job_advertisement", router);
};
