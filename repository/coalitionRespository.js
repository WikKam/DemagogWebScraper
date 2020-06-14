const mongoose = require('mongoose');
const DatabaseRepository = require('./databaseRepository');
const Member = require('../model/member')
const Party = require('../model/party')
const Coalition = require('../model/coalition');

class CoalitionRepository extends DatabaseRepository{
    constructor(){
        super(Coalition);
    }
}

const CoalitionRepositoryInstance = new CoalitionRepository();
Object.freeze(CoalitionRepositoryInstance);
module.exports = CoalitionRepositoryInstance;