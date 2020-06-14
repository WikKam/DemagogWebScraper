const Service = require('./service');
const memberRepository = require('../repository/memberRepository');

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
        return this.countMembersStats(members);
    }
    async getDataOnlyFromCoalition(coalition){
        let members = await memberRepository.findAllFromCoalition(coalition);
        return this.countMembersStats(members);
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