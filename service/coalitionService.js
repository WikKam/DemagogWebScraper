const Service = require('./service');
const coalitionRepository = require('../repository/coalitionRespository');

class CoalitionService extends Service{
    constructor(){
        super(coalitionRepository);
    }
}

const CoalitionServiceInstance = new CoalitionService();
Object.freeze(CoalitionServiceInstance);
module.exports = CoalitionServiceInstance;
