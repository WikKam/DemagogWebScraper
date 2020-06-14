const express = require('express');
const router = express.Router();
const memberService = require('../service/memberService');
const partyService = require('../service/partyService');
const coalitionSerice = require('../service/coalitionService');

router.get('/:name',(req, res) => {
    let name = req.params.name;
    partyService.findAllFromCoalition(name)
                .then(result => {
                    res.setHeader('Content-Type','application/json');
                    res.json(result);
                })
})

router.get('/', (req, res) => {
    coalitionSerice.findAll().then(result => {
        let final = result.map(coalition => coalition.name);
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