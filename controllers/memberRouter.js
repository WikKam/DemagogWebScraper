const express = require('express');
const router = express.Router();
const memberService = require('../service/memberService');

router.get('/', (req, res) => {
    memberService.findAll().then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }).catch(e => res.json(e));
})


router.get('/party/:name', (req, res) => {
    let name = req.params.name;
    memberService.findAllFromParty(name).then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }).catch(e => res.json(e))
})

router.get('/party/coalition/:name', (req, res) => {
    let name = req.params.name;
    memberService.findAllFromCoalition(name).then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }).catch(e => res.json(e))
})

router.get('/:name', (req,res) => {
    let name = req.params.name;
    memberService.findByName(name).then(result => {
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }).catch(e => res.json(e))
})

module.exports = router;

