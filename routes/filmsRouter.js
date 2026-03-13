/*
    6. Import express & uuid, set up router
*/
// import express
const express = require("express")

// set up router object that is designed for setting up routes inside its own file
const router = express.Router()

// import uuid version 4
// creates a unique/random ID
const uuid = require("uuid").v4

/*
    7. Create an array of your favorite films using uuid() for unique ID's
*/
// array given in readme
const films = [
    {
        // uuid() -- generates a new UUID every time we refresh/run the project, they don't persist
        id: uuid(),
        name: "Guardians of the Galaxy",
        boxOffice: 300,
    },
    {
        id: uuid(),
        name: "Dr. Strange & the Multiverse of Madness",
        boxOffice: 75,
    },
    {
        id: uuid(),
        name: "Thor",
        boxOffice: 55,
    },
    {
        id: uuid(),
        name: "When You Finish Saving The World",
        boxOffice: 2,
    },
]

/*
    12. Create sort method for the films
*/

/*
    8a. Handle GET requests to /films
*/
// set up default GET route
// we use router instead of app inside router files
router.get("/", (request, response) => {
    // send a response with all the films as default
    response.json({
        message: "success",
        payload: films
    })
})


/*
    9. Handle POST requests to /films
*/

/*
    10. Handle PUT requests to /films/[id]
*/

/*
    11. Handle DELETE requests to /films/[id]
*/

/*
    8b. Export the router
*/
module.exports = router


// 210