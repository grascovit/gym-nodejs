import express from 'express'
import bodyParser from 'body-parser'
import allowCors from './cors'
import queryParser from 'express-query-int'

var Person = require('../api/person/person')

const port = 3003
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
  console.log(`Server is running on port ${port}.`)
})

module.exports = server
