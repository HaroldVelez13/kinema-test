module.exports = app => {
    const phoneBooks = require("../controllers/phoneBook.controller.js");
    var router = require("express").Router();
    // Create a new phone Book
    router.post("/", phoneBooks.create);
    // Retrieve all phoneBooks
    router.get("/", phoneBooks.findAll);
    // Retrieve a single phone Book with id
    router.get("/:id", phoneBooks.findOne);
    // Update a phone Book with id
    router.put("/:id", phoneBooks.update);
    // Delete a phone Book with id
    router.delete("/:id", phoneBooks.delete);
    app.use('/api/phone-books', router);
};