const mongoose = require('mongoose');
const DatabaseRepository = require('./databaseRepository');
const Member = require('../model/member')
const Party = require('../model/party')
const Coalition = require('../model/coalition');

class MemberRepository extends DatabaseRepository {

    constructor(){
        super(Member);
    }

    async findAllFromParty(partyName){
        let members = await Member.find({party: partyName}).exec();
        return members;
    }

    async findAllFromCoalition(coalitionName){
        let members = [];
        let coalition = await Coalition.findOne({name: coalitionName})
        .populate({
            path: 'parties',
            populate: {
                path: 'members',
                model: 'Member'
            }
        }).exec()
        coalition.parties.forEach(party => {
            members.push(...party.members);
        });
        coalition = await Coalition.findOne({name: coalitionName})
        .populate('members');
        members.push(...coalition.members);
        return members;
    }

    async addMember(member){
        let memberToAdd = new Member({
            name: member.name,
            trueStatements: member.trueStatements,
            falseStatements: member.falseStatements,
            manipulationStatements: member.manipulationStatements,
            position: member.position,
            party: member.party,
            imgUrl: member.imgUrl
        })
        let addedMember = await memberToAdd.save();
        console.log(addedMember);
        let membersParty = await Party.findOne({name: addedMember.party}).exec()
        console.log(membersParty);
        membersParty.members.push(addedMember);
        let ret = await membersParty.save();
        return ret;
    }
    async removeMember(memberName){
        let memberToRemove = await Member.findOne({name: memberName}).exec();
        let partyToRemoveFrom = await Party.findOne({name: memberToRemove.party}).exec();
        partyToRemoveFrom.members.pull(memberToRemove);
        let result = await partyToRemoveFrom.save();
        return result;
    }

    async updateMember(memberName, param, value){
        let memberToUpdate = await Member.findOne({name: memberName}).exec();
        memberToUpdate[param] = value;
        let result = await memberToUpdate.save();
        return result;
    }

}

const MemberRepositoryInstance = new MemberRepository();
Object.freeze(MemberRepositoryInstance);

module.exports = MemberRepositoryInstance;