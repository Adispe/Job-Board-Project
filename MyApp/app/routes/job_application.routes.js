module.exports = (app) => {
    const job_application = require("../controllers/job-application.controller.js");

    var router = require("express").Router();

    // Create a new Job ad
    router.post("/", job_application.create);

    // Retrieve all Job ads
    router.get("/", job_application.findAll);

    // Retrieve all published Job ads
    router.get("/published", job_application.findAllPublished);

    // Retrieve a single Job ad with id
    router.get("/:id", job_application.findOne);

    // Update a Job ad with id
    router.put("/:id", job_application.update);

    // Delete a Job ad with id
    router.delete("/:id", job_application.delete);

    // Delete all Job ads
    router.delete("/", job_application.deleteAll);

    app.use("/api/job_application", router);
};