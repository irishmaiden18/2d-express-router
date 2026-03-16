// import express & uuid
const express = require("express")
const uuid = require("uuid").v4

// set up router
const router = express.Router()

// array of musicians
let musicians = [
  {
    id: uuid(),
    name: "Carson Pace",
    age: 29
  },
  {
    id: uuid(),
    name: "Anthony Green",
    age: 42
  },
  {
    id: uuid(),
    name: "Lizzy McAlpine",
    age: 25
  },
  {
    id: uuid(),
    name: "Yvette Young",
    age: 33
  },
]

// handle GET requests
router.get("/", (request, response) => {
    // send a response with all the musicians as a default
    response.json ({
        message: "success",
        payload: musicians
    })
})

// handle POST requests
router.post("/", (request, response) => {

    // See if the musician we want to add is in our list already
    const foundMusician = musicians.find((musician) => {
        return musician.name === request.body.name
    })

    // if the musician we want to add is NOT in our list
    if (!foundMusician) {

        // create a new object using the data from the request body with our generated uuid
        const newMusician = {
            id: uuid(),
            name: request.body.name,
            age: request.body.age
        }

        // add new data to the array of musicians
        musicians.push(newMusician)

        // respond
        response.json({
            message: "success",
            payload: {
                phrase: `${newMusician.name} has been successfully added!`, 
                entry: newMusician
            }
        })
    // if the musician we want to add is in our list
    } else {
        //respond
        response.json({
            message: "failure",
            payload: `${request.body.name} is already in our list, cannot add`
        })
    }
})

// handle PUT requests
router.put("/:id", (request, response) => {

    // find the musician we want to update
    const foundMusician = musicians.find((musician) => {
        return musician.id === request.params.id
    })

    // if the musician we want to update is in our list
    if (foundMusician) {

        // prevent user from updating ID by creating a new object and providing default data if none is provided for us to update with
        const updatedMusicianData = {
            name: request.body.name || foundMusician.name,
            age: request.body.age || foundMusician.age
        }

        // update musician using our created object
        Object.assign(foundMusician, updatedMusicianData)

        //send a response
        response.json({
            message: "sucess",
            payload: {
                phrase: `${foundMusician.name} has been updated`,
                entry: foundMusician
            }
        })

    // if the musician we want to update is not in our list    
    } else {
        response.status(404).json({
            message: "failure",
            payload: `The musician is not in our list so we CANNOT update`
        })
    }

})

// handle DELETE requests
router.delete("/:id", (request, response) => {

    // figure out whether the musician we want to delete is in our data
    const musicianToDelete = musicians.find(musician => musician.id === request.params.id)

    // if the musican we want to delete is in our data
    if(musicianToDelete) {

        // create a results array and fill it with all the musicians that are NOT the one we want to delete
        const results = musicians.filter((musician) => {
            return musicianToDelete.id !== musician.id
        })

        // reassign the musicians array to the results array
        musicians = results

        // send a response
        response.json({
            message: "success",
            payload: {
                phrase: `${musicianToDelete.name} successfully removed`,
                newList: musicians
            }
        })
    } else {
        response.status(404).json({
            message: "failure",
            payload: "Musician to be deleted is not in our list so we CANNOT delete"
        })
    }
})

// export the router
module.exports = router