const mongoose = require('mongoose');
const DatabaseRepository = require('./databaseRepository');
const Party = mongoose.model('Party');
const Coalition = require('../model/coalition');

class PartyRepository extends DatabaseRepository {
    constructor(){
        super(Party);
    }

    async findAllFromCoalition(name){
        let coalition = await Coalition.findOne({name: name}).populate('parties').exec()
        return coalition.parties;
    }
    
    async addParty(party){
        let partyToAdd = new Party({
            name: party.name,
            members: party.members
        })
        let result = await partyToAdd.save();
        return result;
    }

    async addPartyToCoalition(partyName, coalitionName){
        let coalition =  await Coalition.findOne({name: coalitionName}).exec();
        let party = await Party.findOne({name: partyName}).exec();
        coalition.push(party);
        let result = coalition.save();
        return result;
    }

    async removePartyFromCoalition(partyName, coalitionName){
        let coalition =  await Coalition.findOne({name: coalitionName}).exec();
        let party = await Party.findOne({name: partyName}).exec();
        coalition.pull(party);
        let result = coalition.save();
        return result;
    }

    async removeParty(partyName){
        let partyToRemove = await Party.findOne({name: partyName})
                                        .populate('members').exec();
        let noParty = await Party.findOne({name: 'Brak'});
        partyToRemove.forEach(async member => {
            member.party = 'Brak';
            noParty.members.add(member);
            await member.save();
        })
        let result = await noParty.save();
        let deleted = await Party.deleteOne({name: partyName});
        return [deleted, result];
    }
}

const PartyRepositoryInstance = new PartyRepository();
Object.freeze(PartyRepositoryInstance);

module.exports = PartyRepositoryInstance