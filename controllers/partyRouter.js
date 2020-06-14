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

router.get('/', (req, res) => {
    partyService.findAll().then(result => {
        final = result.map(piece => piece.name);
        res.setHeader('Content-Type','application/json');
        res.json(final)
    })
})

module.exports = router;