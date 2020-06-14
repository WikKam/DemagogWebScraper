const Service = require('./service');
const partyRepository = require('../repository/partyRepository');

class PartyService extends Service{
    constructor(){
        super(partyRepository);
    }
    async findAllFromCoalition(name){
        return partyRepository.findAllFromCoalition(name);
    }
}

const PartyServiceInstance = new PartyService();
Object.freeze(PartyServiceInstance);
module.exports = PartyServiceInstance;