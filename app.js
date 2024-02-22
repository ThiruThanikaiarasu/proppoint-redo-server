const express = require('express')
const app = express()

const {PORT} = require('./configuration/config')
const {connectToDatabase} = require('./database/connection')

const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (request, response) => {
    response.status(200).json({message: "its working bro ✌️"})
})

connectToDatabase()
    .then( () => {
        try{
            app.listen(PORT, () => {
                console.log(`Server started running at http://localhost:${PORT}/`)
            })
        }
        catch(error)
        {
            console.log(`Can't connect to the server : ${error}`)
        }
    })
    .catch(error => {
        console.log(`Error while connecting to database : ${error}`)
    })