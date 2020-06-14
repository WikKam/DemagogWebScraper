module.exports = class Service{
    constructor(repository){
        this.repository = repository;
    }
    async findByName(name){
        return this.repository.findByName(name);
    }

    async findById(name){
        return this.repository.findByName(name);
    }

    async findAll(){
        return this.repository.findAll();
    }
}