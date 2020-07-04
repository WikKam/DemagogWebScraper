# DemagogWebScraper

Backend for DemagogScrapper page (https://wikkam.github.io/DemagogScrapperFrontend/), it fetches data about polish politicians and parties, and checks how truthful they are (it gathers statements and checks whether they are true, false or manipulation)

## Scraper
Web scrapper written in NodeJS with use of cheerio (https://cheerio.js.org/), which gathers data from Demagog website (https://demagog.org.pl/)

## Database 
Gathered data is stored in MongoDB Atlas database, for ODM i used mongoose (https://mongoosejs.com/). Following schemas were created:

* Coalition:
```
const coalitionSchema = mongoose.Schema({
    parties: [{type: mongoose.Schema.Types.ObjectId, ref: "Party"}]
},
options
)
const Coalition = Party.discriminator('Coalition', coalitionSchema);
module.exports = Coalition;
```

* Member: 
```
const memberSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    trueStatements: Number,
    falseStatements: Number,
    manipulationStatements: Number,
    position: String,
    party: String,
    imgUrl: String
})
```
* Party:
```
var options = {discriminatorKey: 'kind'}
const partySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: "Member"}],
    url: {
        type: String
    }
},options)
```

## Api
There`s also a server in nodeJS which provides frontend app with data (https://demagogscrapper.azurewebsites.net/) with following endpoints:

* /coalitions
  returns an array of all coalitions in database.
  * /results
     returns total result of every coalition (true, false and manipulation statements)
  * /:name/members
     returns all members of a coalition
  * /:name
     return a coalition with given name
  * /:name/results
     returns a result for given coalition
      
  
* /parties
  as above, endpoints with same logic
* /members
  as above
  * /:name
    returns a member with given name
  * /:name/results
    returns results of given member

## Frontend
frontend app can be found here https://github.com/WikKam/DemagogScrapperFrontend
 
