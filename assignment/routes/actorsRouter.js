// import express and uuid
const express = require("express")
const uuid = require("uuid").v4

// set up router
const router = express.Router()

// import actors data
let actors = require("../data/actor-data")

// import our sort function
const sort = require("../utils")

// handle GET requests
router.get("/", (request, response) => {
    // use query parameters
    // if there is no query parameters, sort by name/asc by default
    const sortBy = request.query.sortBy || "name"
    const sortOrder = request.query.sortOrder || "asc"

    // call sort function 
    const sortedActors = sort(actors, sortBy, sortOrder)

    // send a response with all the musicians as a default
    response.json ({
        message: "success",
        payload: sortedActors
    })
})

// handle POST requests
router.post("/", (request, response) => {
    
    // see if the actor we want to add is already in our list
    const foundActor = actors.find((actor) => {
        return actor.name === request.body.name
    })

    // if the actor we want to add is NOT in our list
    if (!foundActor) {

        // create a new object using the data from the request body with our generated uuid
        const newActor = {
            id: uuid(),
            name: request.body.name,
            age: request.body.age
        }

        // add new data to the array of actors
        actors.push(newActor)

        // send a response
        response.json({
            message: "success",
            payload: {
                phrase: `${newActor.name} has been successfully added`,
                newList: newActor
            }
        })

    // if the actor we want to add is already in our list
    } else {
        // send a response
        response.json({
            message: "failure",
            payload: `${request.body.name} is already in our list, CANNOT add`
        })
    
    }
})

// handle PUT requests
router.put("/:id", (request, response) => {

    // find the actor we want to update
    const foundActor = actors.find((actor) => {
        return actor.id === request.params.id
    })

    // if the actor is in our list
    if (foundActor) {

        // set the object properties with defaults in case a property is not given using a created object to prevent updating the ID
        const updatedActor = {
            name: request.body.name || foundActor.name,
            age: request.body.age || foundActor.age
        }

        // update the object in our list using the created object above
        Object.assign(foundActor, updatedActor)

        // send a response
        response.json({
            message: "success", 
            payload: {
                phrase: `${foundActor} has been updated`,
                entry: foundActor
            }
        })
    // if the actor is NOT in our list
    } else {
        // send a response
        response.status(404).json({
            message: "failure",
            payload: "Actor is NOT in our list, CANNOT update!"
        })
    }
})

// handle DELETE requests
router.delete("/:id", (request, response) => {
    
    // figure out whether the actor we want to delete is in our data
    const actorToDelete = actors.find(actor => actor.id === request.params.id)

    // if the actor we want to delete is in our data
    if(actorToDelete) {

        // create a results array and fill it with all the actors that are NOT the one we want to delete
        const results = actors.filter((actor) => {
            return actorToDelete.id !== actor.id
        })

        // reassign the actors array to the results array
        actors = results

        // send a response
        response.json({
            message: "success",
            paylo9ad: {
                phrase: `${actorToDelete.name} successfully removed`,
                newList: actors
            }
        })
    } else {
        // send response
        response.status(404).json({
            message: "failure",
            payload: "Actor to be deleted is not in our list so we CANNOT delete"
        })
    }
})


// export the router
module.exports = router