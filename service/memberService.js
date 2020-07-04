const Service = require('./service');
const memberRepository = require('../repository/memberRepository');
const partyRepository = require('../repository/partyRepository');

class MemberService extends Service{
    constructor(){
        super(memberRepository);
    }
    async findAllFromParty(party){
        return memberRepository.findAllFromParty(party);
    }
    async findAllFromCoalition(coalition){
        return memberRepository.findAllFromCoalition(coalition);
    }
    async getDataOnlyFromParty(party){
        let members = await memberRepository.findAllFromParty(party);
        let partyInst = await partyRepository.findByName(party);
        return {
            ...this.countMembersStats(members),
            name: party,
            url: partyInst.url
        };
    }
    async getDataOnlyFromCoalition(coalition){
        let members = await memberRepository.findAllFromCoalition(coalition);
        let partyInst = await partyRepository.findByName(coalition);
        console.log(partyInst);
        console.log('#############################')
        return {
            ...this.countMembersStats(members),
            name: coalition,
            url: partyInst.url
        };
    }
    countMembersStats(members){
        let trueStatements = 0;
        let falseStatements = 0;
        let manipulationStatements = 0;
        members.forEach(member => {
            trueStatements += member.trueStatements;
            falseStatements += member.falseStatements;
            manipulationStatements += member.manipulationStatements;
        })

        return{
            trueStatements: trueStatements,
            falseStatements: falseStatements,
            manipulationStatements: manipulationStatements
        }
    }
}

const memberServiceInstance = new MemberService();
Object.freeze(memberServiceInstance);
module.exports = memberServiceInstance;