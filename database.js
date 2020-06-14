const uri = "mongodb+srv://wiktor:wiktor@cluster0-bjbbc.mongodb.net/DemagogProject?retryWrites=true&w=majority";
const mongoose = require('mongoose');

const Member = require('./model/member');//mongoose.model('Member');
const Party = require('./model/party');//mongoose.model('Party');
const Coalition = require('./model/coalition')
const party = require('./repository/partyRepository');
const member = require('./repository/memberRepository'); 
const scrapper = require('./scrapper/scrapper');

const {allParties,
    zjednoczonaPrawica,
    lewica, konfederacja,
    koalicjaPolska,
    koalicjaObywatelska,
    allCoalitions 
} = require('./model/const');


mongoose.connect(uri,{ 
    useNewUrlParser: true,
     useUnifiedTopology: true  
});
const db = mongoose.connection

//ADD ALL PARTIES AND COALITIONS

/*allCoalitions.forEach(c => {
    console.log([...c.parties.entries()])
    let newCoalition = new Coalition({name: c.name, members:[], parties:[]})
    newCoalition.save()
    .then(result => console.log(result))
    .catch(err => console.groupCollapsed(err));
})
allParties.forEach(p => {
    let newParty = new Party({name: p, members:[]})
    newParty.save()
    .then(result => {
        partyCoalition = allCoalitions.find(coalition => coalition.parties.has(result.name));
        console.log(partyCoalition.name);
        console.log(result.name)
        if(partyCoalition){
            let coalitionName = partyCoalition.name;
            Coalition.findOne({name: coalitionName}).then(foundCoalition => {
                foundCoalition.parties.push(result);
                foundCoalition.save().then(result => console.log(result));
            })
        }
    })
    .catch(err => console.log(err));
})*/

/*member.addMember({
    name: "Test test",
    trueStatements: 0,
    falseStatements: 0,
    manipulationStatements: 0,
    position: 'test',
    party: 'Koalicja Obywatelska'
}).then(result => console.log(result)).catch(error => console.log(error));
*/

//ADD ALL MEMBERS
/*
scrapper.getAllPoliticiansData().then(result => {
    let data = result[0];
    data.forEach(async data => {
        let result = await member.addMember(data);
        console.log(result);
    })
})
*/
const memberService = require('./service/memberService');

console.log(memberService)

memberService.findAllFromCoalition('Koalicja Obywatelska')
.then(res => console.log(res))
.catch(err => console.log(err))
