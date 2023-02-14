// Aviram Avivi 209042316
//Meni Banin 206058612

const express = require('express');
const {CostModel} = require("../models/cost-model");
const costController = require("../controllers/cost-controller");
const router = express.Router();

// Handling a POST request for adding a cost
router.post('/', costController.addCost);

module.exports = router;