const mongoose = require('mongoose');
const {partySchema, options } = require('./party.js');
const Party = mongoose.model("Party")
const coalitionSchema = mongoose.Schema({
    parties: [{type: mongoose.Schema.Types.ObjectId, ref: "Party"}]
},
options
)
const Coalition = Party.discriminator('Coalition', coalitionSchema);
module.exports = Coalition;
