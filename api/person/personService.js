import mongoose from 'mongoose'

const Person = mongoose.model('Person')

exports.listPeople = (req, res) =>{
    Person.find({}, function(err, people) {
        if (err)
            res.send(err)
        res.json(people)
    })
}

exports.createPerson = (req, res) =>{
    const newPerson = new Person(req.body)

    if(isEmpty(newPerson.registry_number)
        || isEmpty(newPerson.name)){
        res.json(null)
    } else {
        Person.findOneAndUpdate(
            {registry_number: newPerson.registry_number},
            {name: newPerson.name, birth: newPerson.birth},
            {upsert: true},

            function(err, person) {
                if (err)
                    res.send(err)
                Person.findOne({registry_number: newPerson.registry_number}, function(err, person) {
                    if (err)
                        res.send(err)
                    res.json(person)
                })
            })
    }


}

exports.readPerson = (req, res) =>{
    Person.findOne({registry_number: req.params.registry_number}, function(err, person) {
        if (err)
            res.send(err)
        res.json(person)
    })
}

exports.removePerson = (req, res) =>{
    if(isEmpty(req.params.registry_number)){
        res.json(null)
    } else {
        Person.findOneAndRemove({registry_number: req.params.registry_number}, function(err, person) {
            if (err)
                res.send(err)
            res.json(person)
        })
    }
}



exports.updatePerson = (req, res) =>{
    const newPerson = new Person(req.body);

    if(isEmpty(req.params.registry_number)){
        res.json(null)
    } else {
        Person.findOneAndUpdate(
            {registry_number: req.params.registry_number},
            chooseAttr(newPerson),
            {upsert: true},

            function(err, person) {
                if (err)
                    res.send(err)
                Person.findOne({registry_number: newPerson.registry_number}, function(err, person) {
                    if (err)
                        res.send(err)
                    res.json(person)
                })
            }
        )
    }
}

const chooseAttr = (person) => {
    if(isEmpty(person.name) && isEmpty(person.birth)){
        return {}
    } else if(isEmpty(person.name)) {
        return {birth: person.birth}
    } else if(isEmpty(person.birth)) {
        return {birth: person.name}
    } else{
        return {name: person.name, birth: person.birth}
    }
}

const isEmpty = (attr) => {
    if(attr === "") return true
    else return false
}

