// import express & Morgan and set up app variable
const express = require("express")
const logger = require("morgan")
const app = express()

// set up middleware

// morgan
app.use(logger("dev"))

// formats our express body
app.use(express.json())

// import router files
const musiciansRouter = require("./routes/musiciansRouter")
const actorsRouter = require("./routes/actorsRouter")

// set up URL routes to connect to each router
app.use("/api/v1/musicians", musiciansRouter)
app.use("/api/v1/actors", actorsRouter)

// set up port
const PORT = 3000

//begin listening
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})