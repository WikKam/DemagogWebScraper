const mongoose = require('mongoose');
const uri = "mongodb+srv://wiktor:wiktor@cluster0-bjbbc.mongodb.net/DemagogProject?retryWrites=true&w=majority";

module.exports = class DatabaseRepository {
    constructor(model){
        mongoose.connect(uri,{ 
            useNewUrlParser: true,
             useUnifiedTopology: true  
        });
        this.model = model
    }
    async findByName(name){
        let result = await this.model.find({name: name}).exec()
        return result;
    }
    async findById(id){
        let result = await this.model.findById(id).exec()
        return result;
    }
    async findAll(){
        let result = await this.model.find().exec()
        return result;
    }
}