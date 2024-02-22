const express = require('express')
const app = express()

const {PORT} = require('./configuration/config')

app.get('/', (request, response) => {
    response.status(200).json({message: "its working bro ✌️"})
})

app.listen(PORT, console.log(`Server is listening at http://localhost:3500/`))