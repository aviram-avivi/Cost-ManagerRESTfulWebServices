// Aviram Avivi 209042316
//Meni Banin 206058612

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/",function (req, res) {
    // Define a list of developers
    const developers = [
        {
            firstname: "Aviram",
            lastname: "Avivi",
            id: "209042316",
            email: "aviram195@gmail.com",
        },
        {
            firstname: "Meni",
            lastname: "Banin",
            id: "206058612",
            email: "Menibanin0@gmail.com",
        },
    ];
    res.json(developers);
});

module.exports = router;