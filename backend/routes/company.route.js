const express = require('express');
const { companyCreate, getCompany } = require('../controllers/company/company.controllers');
const RbacAuth = require('../middleware/RbacAuth');
const companyRouter = express.Router();

companyRouter.post('/create',RbacAuth,companyCreate)
companyRouter.get('/',getCompany)

module.exports = companyRouter