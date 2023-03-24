const ApiError = require("@exceptions/api.exception");
const companiesModel = require('@models/companies.model')
const axios = require('axios');

class CompaniesService {

    async fetchCompanyName(inn) {
        this.validateInn(inn)
        let companyName = ''

        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        const token = "0d664f65720733b41a8ff4c896ca2887014651a8";
        const query = inn;

        const headers = {
            'Access-Control-Allow-Origin': '*', // * или ваш домен
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        }
        const body = JSON.stringify({
            query: query,
            branch_type: "MAIN"
        })

        try {
            const response = await axios.post(url, body, {
                headers
            })

            if (response.data && response.data.suggestions) {
                let list = response.data.suggestions

                if (list[0]) companyName = list[0].value
            }

        } catch (error) {
            throw error
        }

        return companyName
    }

    async saveCompany(data) {
        const companyData = await companiesModel.create({
            inn: data.inn,
            name: data.name
        })
    }

    async getByINN(inn) {
        const companyData = await companiesModel.findOne({inn})

        return companyData
    }

    validateInn(inn) {
        let result = false;

        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }

        if (!inn.length) {
            throw ApiError.BadRequest('ИНН пуст')

        } else if (/[^0-9]/.test(inn)) {
            throw ApiError.BadRequest('ИНН может состоять только из цифр')

        } else if ([10, 12].indexOf(inn.length) === -1) {
            throw ApiError.BadRequest('ИНН может состоять только из 10 или 12 цифр')

        } else {
            const checkDigit = function (inn, coefficients) {
                let n = 0;
                for (let i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (inn.length) {
                case 10:
                    const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                throw ApiError.BadRequest('Неправильное контрольное число')
            }
        }

        return result;
    }
}

module.exports = new CompaniesService