import express from 'express'
import personService from '../api/person/personService'

module.exports = (server) =>{

  server.route('/api/people')
      .get(personService.listPeople)
      .post(personService.createPerson)

  server.route('/api/people/:registry_number')
      .get(personService.readPerson)
      .put(personService.updatePerson)
      .delete(personService.removePerson)


  // const personService = require('../api/person/personService')
  // personService.register(router, '/people')
  //
  //
  // router.delete(personController.removePerson)
  //   personService.register(router, '/people/:registry_number')

}
