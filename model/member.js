const mongoose = require('mongoose');

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
const Member = mongoose.model('Member',memberSchema);
module.exports = Member