const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const rfs = require('rotating-file-stream')
const bodyParser = require('body-parser')
const logger = require('./middleware/logger')
const morgan = require ('morgan')

const itemRoute = require('./routes/items')
const projectRoute = require('./routes/project')
const connectDB = require("./config/db")
const errorHandler = require("./middleware/error")

dotenv.config({path: './config/config.env'})

connectDB()

var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs')
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger)
app.use(morgan('combined',{stream: accessLogStream}))
app.use('/api/v1',projectRoute)
app.use('/api/v1/item',itemRoute)
app.use(errorHandler)

const server = app.listen(
  process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`алдаа гарсан байна: ${err.message}`)
  server.close(() => {
    process.exit()
  })
})