// import express and uuid
const express = require("express")
const uuid = require("uuid").v4

// set up router
const router = express.Router()

// array of actors
let actors = [
  {
    id: uuid(),
    name: "Nathan Fielder",
    age: 42,
  },
  {
    id: uuid(),
    name: "Emma Stone",
    age: 36,
  },
  {
    id: uuid(),
    name: "Aaron Paul",
    age: 45,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
]

// handle GET requests
router.get("/", (request, response) => {
    // send a response with all the actors as a default
    response.json ({
        message: "success",
        payload: actors
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

// export the router
module.exports = router