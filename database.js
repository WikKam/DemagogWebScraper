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

allCoalitions.forEach(c => {
    console.log([...c.parties.entries()])
    console.log(c.url);
    let newCoalition = new Coalition({name: c.name, members:[], parties:[], url: c.url})
    newCoalition.save()
    .then(result => console.log(result))
    .catch(err => console.groupCollapsed(err));
})
allParties.forEach(p => {
    console.log(p.url);
    let newParty = new Party({name: p.name, members:[], url: p.url})
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
})



//ADD ALL MEMBERS

scrapper.getAllPoliticiansData().then(result => {
    let data = result[0];
    data.forEach(async data => {
        let result = await member.addMember(data);
        console.log(result);
    })
})

const memberService = require('./service/memberService');

console.log(memberService)

memberService.findAllFromCoalition('Koalicja Obywatelska')
.then(res => console.log(res))
.catch(err => console.log(err))
