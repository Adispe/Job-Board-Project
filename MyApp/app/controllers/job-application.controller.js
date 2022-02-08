const db = require("../models");
const Job_application = db.job_application;
const Op = db.Sequelize.Op;

// Create and Save a new Job application
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty idiot!",
    });
    return;
  }

  // Create a Job application
  const job_application = {
    id_jobseeker: req.body.id_jobseeker,
    id_hr: req.body.id_hr,
    id_advertisement: req.body.id_advertisement,
    jobseeker_messages: req.body.jobseeker_messages,
    advertiser_messages: req.body.advertiser_messages,
    status: req.body.status,
    date: req.body.date,
    age: req.body.age,
    work_experience: req.body.work_experience,
    education: req.body.education,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
  };

  // Save Job application in the database
  Job_application.create(job_application)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Job application.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id
    ? {
        id: {
          [Op.like]: `%${id}%`,
        },
      }
    : null;

  Job_application.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving job advertisements.",
      });
    });
};

// Find a single Job advertisement with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Job_application.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Job advertisement with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Job advertisement with id=" + id,
      });
    });
};

// Update a Job advertisement by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Job_application.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Job advertisement was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Job advertisement with id=${id}. Maybe Job advertisement was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Job advertisement with id=" + id,
      });
    });
};

// Delete a Job advertisement with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Job_application.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Job advertisement was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Job advertisement with id=${id}. Maybe Job advertisement was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Job advertisement with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Job_application.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all job advertisements.",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Job_application.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving job advertisements.",
      });
    });
};
