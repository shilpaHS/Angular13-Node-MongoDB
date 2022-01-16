module.exports = app => {
    const property = require("../controllers/property.controller.js");

    var router = require("express").Router();

    // Create a new Properties
    router.post("/", property.create);

    // Retrieve all Properties
    router.get("/", property.findAll)

    // Delete a property with id
    router.delete("/:id", property.delete);

    app.use("/api/property", router);
};