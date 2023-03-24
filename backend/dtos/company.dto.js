

module.exports = class CompanyDto {
    id;
    inn;
    name;

    constructor(model) {
        this.inn = model.inn
        this.id = (model._id) ? model._id.toString() : model.id
        this.name = model.name
    }
}

