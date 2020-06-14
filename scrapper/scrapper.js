const cheerio = require('cheerio');
const politiciansListUrl = 'https://demagog.org.pl/sprawdzani/wszystkie-osoby/page/';
const fetch = require('node-fetch');

class Scraper{
    fetchData = (url) =>{
        return fetch(url).then(response => {
            if(!response.ok){
                return('END');
            }
            else{
                return response.text()
            }
        })
    }


    getPoliticianDataPage = (name) => {
        return this.fetchData(name.url)
    }

    parsePoliticianDataPage = (name, page) => {
        const $ = cheerio.load(page);
        let statementsInfo = [];
        let personalInfo = [];
        let imgUrl = '';
        $('.personal-info').find('p').each((index, element) =>{
            let potentialData = $(element).text();
            if(potentialData.match(/^[0-9 ]+$/)){
            statementsInfo.push(parseInt(potentialData));
            }
        });

        $('.personal-info').find('div').first().each((index,element) => {
            $(element).find('p').each((index, nestedElement) => {
                let content = $(nestedElement).text();
                let idx = content.indexOf(':');
                if (idx){
                    content = content.slice(idx + 1);
                }
                personalInfo.push(content.trim())
            })
        })

        $('.personal-info').find('img').first().each((index, element) =>{
                let url = $(element).attr('src');
                imgUrl = url; 
        })
        return{
            name: name,
            trueStatements: statementsInfo[1],
            falseStatements: statementsInfo[2],
            manipulationStatements: statementsInfo[3],
            position: personalInfo[0],
            party: personalInfo[1] == undefined ? 'Brak' : personalInfo[1],
            imgUrl: imgUrl
        }

    }

    getPoliticiansListPage = (number) => {
        return this.fetchData(politiciansListUrl + number);
    }

    parsePoliticiansListPage = (page) =>{
        let results = [];
        const $ = cheerio.load(page);
        $('.photo-article').each((index, element) => {
            let name = $(element).attr('title');
            let url = $(element).attr("href");
            results.push({
                name: name,
                url: url
            });
        })
        return results;
    }

    async getAllPoliticiansData(){
        let parties = new Set();
        let iter = 0;
        let names = [];
        let data = [];
        while(true){
            iter++;
            let response = await this.getPoliticiansListPage(iter);
            if (response == 'END'){
                break;
            } 
            names.push(...this.parsePoliticiansListPage(response));
        }
        console.log(names);
        for(let name of names){
            let response = await this.getPoliticianDataPage(name);
            let parsedResponse = this.parsePoliticianDataPage(name.name, response);
            console.log(parsedResponse);
            data.push(parsedResponse)
            parties.add(parsedResponse.party);
        }
        return [data,parties];
    }
}
const ScrapperInstance = new Scraper();
Object.freeze(ScrapperInstance);
module.exports = ScrapperInstance

ScrapperInstance.getAllPoliticiansData().then(data => console.log(data));
