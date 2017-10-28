const restful = require('node-restful')
const mongoose = restful.mongoose

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth: { type: Date, required: true },
  registry_number: { type: String, required: true }
})

module.exports = restful.model('Person', personSchema)
