const express = require('express')

module.exports = function(server) {
  const router = express.Router()
  server.use('/api', router)

  const personService = require('../api/person/personService')
  personService.register(router, '/people')
}
