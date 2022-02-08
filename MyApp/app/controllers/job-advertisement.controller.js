const db = require("../models");
const Job_advertisement = db.job_advertisement;
const Op = db.Sequelize.Op;

// Create and Save a new Job advertisement
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty idiotas!",
    });
    return;
  }

  // Create a Job advertisement
  const job_advertisement = {
    company: req.body.company,
    id_user: req.body.id_user,
    name: req.body.name,
    contract: req.body.contract,
    localisation: req.body.localisation,
    short_description: req.body.short_description,
    full_description: req.body.full_description,
    published: req.body.published ? req.body.published : false,
  };

  // Save Job advertisement in the database
  Job_advertisement.create(job_advertisement)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Job advertisement.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? {
        name: {
          [Op.like]: `%${name}%`,
        },
      }
    : null;

  Job_advertisement.findAll({ where: condition })
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

  Job_advertisement.findByPk(id)
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

  Job_advertisement.update(req.body, {
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

  Job_advertisement.destroy({
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
  Job_advertisement.destroy({
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
  Job_advertisement.findAll({ where: { published: true } })
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
