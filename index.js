require('dotenv').config()
const path = require("path")
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

process.env.API_KEY || "gaga"

app.use(express.static(path.join(__dirname, "client/build")))

app.use(express.json())

app.get('/api/*', (req, res) => {
    res.json({
        cohort: "Web41",
        Working: "Yes"
    })
})

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})