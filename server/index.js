const express = require('express')
const app = express()

app.get('/route1', (req, res) => {
    res.json({message: 'Successfully reached'})
})

app.get('/route2', (req, res) => {
    res.json({message: 'Successfully reached'})
})

app.get('/route3', (req, res) => {
    res.json({message: 'Successfully reached'})
})

app.use('/useRoute', (req, res) => {
    res.json({message: 'Successfully reached'})
})

app.listen(3000, () => {
    console.log("Server working fine")
})