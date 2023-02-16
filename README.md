# Daily Cost Manager

The Daily Cost Manager is a web application that allows users to manage their daily costs by adding new cost items and generating reports. The application is built with a RESTful architecture, and its server-side is developed using Express.js in JavaScript.

## Database

The data is stored in a MongoDB database, using the MongoDB Atlas service. The database is organized in collections for users and costs. The costs can be categorized into food, health, housing, sport, education, transportation, and other. The users have an id, first name, last name, and birthday, while the costs have a user id, year, month, day, description, category, and sum.

## RESTful web services endpoints

The application exposes the following RESTful web services endpoints:

- `/addcost`: Adds a new cost item to the database for a specific user.
- `/report`: Generates a detailed report of costs for a specific month and year, for a specific user.
- `/about`: Returns a JSON array with information about the developers of the application.

These endpoints are accessible via HTTP methods, with parameters as specified in the documentation.

## Developers

Aviram Avivi


Meni Banin

