// Aviram Avivi 209042316
//Meni Banin 206058612

const {CostModel} = require("../models/cost-model");
const {UserModel} = require("../models/user-model");
const {cache} = require("./cache");


const randomId = () => Math.random().toString(36).slice(2); // generates a random string to use as cost id

// list of allowed categories for a cost
const categories = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other']

// function to add a cost to the database
async function addCost(req, res) {
    try {
        const cost = req.body;

        // checking if user with provided id exists in the database
        const userExist = Boolean(await UserModel.findOne({id: cost.user_id}))
        if(!userExist) {
            return res.status(400).send('User id does not exist')
        }

        // checking if provided cost category is allowed
        if(!categories.includes(cost.category)){
            return res.status(400).send('Category is not allowed. Allowed categories: '+categories.join(', '))
        }

        // creating a new cost entry with provided data and generated id
        const addedCost = await CostModel.create({...cost, id: randomId() });

        // This creates a cache key based on the year, month, and user id of the cost.
        const cacheKey  = cost.year.toString() + cost.month.toString() + cost.user_id;
        console.log(cacheKey)
        // This deletes the cache entry for the cost if it exists.
        if(cache.has(cacheKey)) {
            cache.delete(cacheKey)
        }
        res.json(addedCost);
    } catch (e){
        res.json(e)
    }
}

const costController = { addCost };
module.exports = costController;
