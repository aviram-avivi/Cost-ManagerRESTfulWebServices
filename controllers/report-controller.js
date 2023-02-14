// Aviram Avivi 209042316
//Meni Banin 206058612

const {CostModel} = require("../models/cost-model");

// function to get cost report
async function getReport(req, res, next) {

    // destructuring query parameters from the request
    const { year, month, userId } = req.query;

    // finding all costs that match provided year, month, and user id
    const costs = await CostModel.find({user_id: userId, year: year, month: month});

    const result = {
        food:[],
        health:[],
        housing:[],
        sport:[],
        education:[],
        transportation:[],
        other: []
    }

    for (const cost of costs) {
        // adding each cost to its respective category
        result[cost.category].push({
            day: cost.day,
            description: cost.description,
            sum: cost.sum
        })
    }

    res.json(result)
}

module.exports.getReport = getReport;