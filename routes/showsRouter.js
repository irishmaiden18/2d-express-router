const express = require("express")

const router = express.Router()

const uuid = require("uuid").v4

const shows = [
    {
        id: uuid(),
        name: "Breaking Bad"
    },
    {
        id: uuid(),
        name: "The Sopranos"
    }
]

router.get("/", (request, response) => {
    response.json({
        message: "success",
        payload: shows
    })
})

module.exports = router