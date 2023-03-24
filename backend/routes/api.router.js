const router =  require('express').Router();
const  companiesController = require('@controllers/companies.cotroller');

/* GET users listing. */
router.get( '/:inn', companiesController.getCompanyDataByINN );

module.exports = router;