// get set up
// npm init -y
// npm install express morgan
// npm install uuid
// npm i lodash

/*
    1. Import express & Morgan, set up app variable
*/
const express = require("express")
const logger = require("morgan")

const app = express()

/*
    2. Set up middleware
*/
// morgan
app.use(logger("dev"))

// formats our express body
app.use(express.json())

/*
    3. Import Router files
*/
// importing router we created in filmsRouter.js
const filmsRouter = require("./routes/filmsRouter")

// importing router we created in showsRouter.js
const showsRouter = require("./routes/showsRouter")

/*
    4. Set up the URL routes to connect to each router
*/
// middleware to use router file
// app.use("routeURL", router)
// /api/v1/films - more proper name for setting up an API route, tend to start with api, cause that's what it is and then the version and then the name
// /api/versionNumber/identifier
// pass in the router it'self as the second parameter
// the "/api/v1/films" is the prefix to all the routes specified in filmsRouter file
app.use("/api/v1/films", filmsRouter)
// the "/api/v1/shows" is the prefix to all the routes specified in showsRouter file
app.use("/api/v1/shows", showsRouter)
/*
    5. Set up the port and begin listening
*/
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})
