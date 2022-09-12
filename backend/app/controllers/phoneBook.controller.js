const db = require("../models");
const PhoneBooks = db.phoneBooks;
const Op = db.Sequelize.Op;
// Create and Save a new phoneBooks
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName || !req.body.lastName || !req.body.phoneNumber) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a PhoneBooks
    const phoneBook = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
    };
    // Save phoneBook in the database
    PhoneBooks.create(phoneBook)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Phone Book."
            });
        });

};
// Retrieve all phoneBooks from the database.
exports.findAll = (req, res) => {
    const lastName = req.query.lastName ?? null;
    var condition = lastName ? { lastName: { [Op.like]: `%${lastName}%` } } : null;
    PhoneBooks.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Phone Books."
            });
        });

};
// Find a single phoneBook with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    PhoneBooks.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find PhoneBooks with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Phone Books with id=" + id
            });
        });

};
// Update a phoneBook by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    PhoneBooks.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Phone Book was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Phone Book with id=${id}. Maybe Phone Book was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Phone Book with id=" + id
            });
        });

};
// Delete a phoneBook with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    PhoneBooks.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Phone Book was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Phone Book with id=${id}. Maybe Phone Book was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Phone Book with id=" + id
            });
        });
};