// Aviram Avivi 209042316
//Meni Banin 206058612

const express = require('express');
const reportController = require('../controllers/report-controller');
const router = express.Router();


/* GET users listing. */
router.get('/', reportController.getReport);

module.exports = router;