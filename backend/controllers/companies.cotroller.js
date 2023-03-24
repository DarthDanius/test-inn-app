const companiesService = require("@services/companies.service")

class CompaniesController {

    async getCompanyDataByINN(req, res, next) {
        let companyName = ''
        
        try {
            const inn = req.params.inn
            companiesService.validateInn(inn)
            let companyData = await companiesService.getByINN(inn)

            if (!companyData) {
                companyName = await companiesService.fetchCompanyName(inn)
                if (companyName) {
                    companyData = {
                        inn,
                        name: companyName
                    }

                    await companiesService.saveCompany(companyData)
                }

            } else {
                companyName = companyData.name
            }
            
        } catch (error) {
            next(error)
        }

        res.send(companyName)
    }
}

module.exports = new CompaniesController