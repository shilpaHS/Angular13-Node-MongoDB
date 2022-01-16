const db = require("../models");
const Property = db.property;

// Create and Save a new Property
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Property
    const property = new Property({
        name: req.body.name,
        description: req.body.description,
        size: req.body.size
    });

    // Save Property in the database
    property
        .save(property)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Property."
            });
        });
};

// Retrieve all Properties from the database.
exports.findAll = (req, res) => {

    Property.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Properties."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Property.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Propert with id=${id}. Maybe Property was not found!`
                });
            } else {
                res.send({
                    message: "Property was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Property with id=" + id
            });
        });
};