// get set up
// npm init -y
// npm install express morgan

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

/*
    4. Set up the URL routes to connect to each router
*/

/*
    5. Set up the port and begin listening
*/

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})