const express = require('express');
const router = express.Router();
const memberService = require('../service/memberService');
const partyService = require('../service/partyService');

router.get('/:name/results',(req,res) => {
    let name = req.params.name;
    memberService.getDataOnlyFromParty(name)
                .then(result => {
                    res.setHeader('Content-Type','application/json');
                    res.json(result);
                })
})

router.get('/:name/members',(req, res) => {
    let name = req.params.name;
    memberService.findAllFromParty(name)
                .then(result => {
                    res.setHeader('Content-Type','application/json');
                    res.json(result);
                });
})

router.get('/results', (req, res) => {
    let dataToSend = [];
    partyService.findAll().then(result => {
        console.log(result);
        let promises = [];
        result.forEach(party => {
            promises.push(memberService.getDataOnlyFromParty(party.name))
        })
        Promise.all(promises).then( values => res.json(values));
    })
})

router.get('/', (req, res) => {
    partyService.findAll().then(result => {
        final = result.map(piece => {
            return {
            name: piece.name,
            url: piece.url
            }
        });
        res.setHeader('Content-Type','application/json');
        res.json(final)
    })
})

module.exports = router;