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

// import lodash
const _ = require("lodash")
/*
    7. Create an array of your favorite films using uuid() for unique ID's
*/
// array given in readme
let films = [
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

// _ - sortBy(array, propertyToSortBy)
// set data order up for both ascending (asc) and descending (desc) order in custom sort function
const sort = (data, sortByProperty, sortOrder) => {
    // sort the data
    // if there is no sortByProrperty given it will just return the data as is
    const sortedData = _.sortBy(data, sortByProperty)

    // if sortOrder is descending
    if (sortOrder === "desc") {
        // flip/reverse the order
        // .reverse modifies the original array
        sortedData.reverse()
    }

    return sortedData
}



/*
    8a. Handle GET requests to /films
*/
// set up default GET route
// we use router instead of app inside router files
router.get("/", (request, response) => {

    // query parameters
    // to have both parameters ?firstQueryparameter&SecondQueryParameter (as many as needed separated by &)
    // ?key1=value1&key2=value2&key3=value3...
    
    // if there is no query parameters, sort by name/asc by default (optional)
    const sortBy = request.query.sortBy || "name"
    const sortOrder = request.query.sortOrder || "asc"

    const sortedFilms = sort(films, sortBy, sortOrder)

    // send a response with all the films as default
    response.json({
        message: "success",
        payload: sortedFilms
    })
})


/*
    9. Handle POST requests to /films
*/
router.post("/", (request, response) =>{
    // create a new object utilizing the data from the request body along with our generated uuid()
    const newFilm = {
        id: uuid(),
        name: request.body.name,
        boxOffice: request.body.boxOffice
    }

    // add new data to array
    films.push(newFilm)

    // respond
    response.json({
        message: "success",
        payload: newFilm
    })
})

/*
    10. Handle PUT requests to /films/[id]
*/
// "/:id" adds a dynamic parameter to the end of the standard url defined in index.js
router.put("/:id", (request,response) => {
    // find the existing film we want to modify
    const foundFilm = films.find((film) => {
        return film.id === request.params.id
    })

    if (foundFilm) {
        // successfully found film, lets update!

        // prevent user from updating ID
        // want to copy over only the necessary data from the request body (i.e. not the id)
        const updatedFilmData = {
            // the || prioritizes the new property, so if the new property is given in the request body, it will use it, but if there is nothing there, it will use the existing data
            // for example, if the user submits a new name in the request body, use the new name. if they don't, use the foundFilm name
            name: request.body.name || foundFilm.name,
            boxOffice: request.body.boxOffice || foundFilm.boxOffice
        }

        Object.assign(foundFilm, updatedFilmData)
        // Object.assign(foundFilm, request.body)

        response.json({
            message: "success",
            payload: foundFilm
        })

    } else {
        response.status(404).json({
            message: "failure",
            payload: "Film to update not Found"
        })
    }
})

/*
    11. Handle DELETE requests to /films/[id]
*/
router.delete("/:id", (request, response) => {

    // using implicit return
    const filmToDelete = films.find(film => film.id === request.params.id)

    if (filmToDelete) {
        const results = films.filter((film) => {
            return filmToDelete.id !== film.id
        })

        films = results

        response.json({
            message: "success",
            payload: `${filmToDelete.name} successfully removed`
        })
    } else {
        response.status(404).json({
            message: "failure",
            payload: "film to delete not found"
        })
    }
})

/*
    8b. Export the router
*/
module.exports = router
