const express = require('express');
const router = express.Router();
const memberService = require('../service/memberService');
const partyService = require('../service/partyService');
const coalitionService = require('../service/coalitionService');
const Coalition = require('../model/coalition');

router.get('/results', (req, res) => {
    let dataToSend = [];
    coalitionService.findAll().then(result => {
        console.log(result);
        let promises = [];
        result.forEach(coalition => {
            promises.push(memberService.getDataOnlyFromCoalition(coalition.name))
        })
        Promise.all(promises).then( values => res.json(values));
    })
})

router.get('/:name/members',(req, res) => {
    let name = req.params.name;
    partyService.findAllFromCoalition(name)
                .then(result => {
                    res.setHeader('Content-Type','application/json');
                    res.json(result);
                })
})

router.get('/:name', (req,res) => {
    coalitionService.findByName(req.params.name)
    .then(result =>{
        res.setHeader('Content-Type','application/json');
        res.json(result);
    })
})

router.get('/', (req, res) => {
    coalitionService.findAll().then(result => {
        let final = result.map(coalition => {
           return {
               name: coalition.name,
               url: coalition.url
           }
        });
        res.setHeader('Content-Type','application/json');
        res.json(final);
    })
})

router.get('/:name/results',(req,res) => {
    let name = req.params.name;
    memberService.getDataOnlyFromCoalition(name)
                .then(result => {
                    res.setHeader('Content-Type','application/json');
                    res.json(result);
                })
})


module.exports = router;