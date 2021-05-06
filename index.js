console.log('it is working')

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/*', (req, res) => {
    res.json({
        cohort: "Web41",
        Working: "Yes"
    })
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})