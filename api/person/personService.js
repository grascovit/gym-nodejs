import mongoose from 'mongoose'

const Person = mongoose.model('Person')

exports.listPeople = (req, res) =>{
    Person.find({}, function(err, people) {
        if (err)
            res.send(err);
        res.json(people);
    });
};

exports.createPerson = (req, res) =>{
    var newPerson = new Person(req.body);

    Person.findOneAndUpdate(
        {registry_number: newPerson.registry_number},
        {name: newPerson.name, birth: newPerson.birth},
        {upsert: true},

        function(err, person) {
        if (err)
            res.send(err);

        res.send(person)
    });

};

exports.readPerson = (req, res) =>{
    Person.findOne({registry_number: req.params.registry_number}, function(err, person) {
        if (err)
            res.send(err);
        res.json(person);
    });
};

exports.removePerson = (req, res) =>{
    Person.findOneAndRemove({registry_number: req.params.registry_number}, function(err, person) {
        if (err)
            res.send(err);
        res.json(person);
    });
};

exports.updatePerson = (req, res) =>{
    var newPerson = new Person(req.body);
    Person.findOneAndUpdate({registry_number: req.params.registry_number},
        newPerson,
        {new: true},
        function(err, person) {
        if (err)
            res.send(err);
        res.json(person);
    });
};