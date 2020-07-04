const mongoose = require('mongoose');
const memberSchema = require('./member.js')
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
const Party = mongoose.model('Party', partySchema);
module.exports = Party
