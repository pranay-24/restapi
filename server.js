require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db= mongoose.connection
db.on('error', (error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('connected to database')
})

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)

app.listen(port, ()=>{
console.log(`listening to port ${port}`)
})