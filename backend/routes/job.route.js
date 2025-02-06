const express = require('express');
const {jobCreate, getJobs, jobsAccordingToRecruiter} = require('../controllers/jobs/job.create.controllers');
 
const RbacAuth = require('../middleware/RbacAuth');

const jobRouter = express.Router()

jobRouter.post('/create',RbacAuth,jobCreate)
jobRouter.get('/', getJobs)
jobRouter.get('/recruiter/:recruiterId', RbacAuth,jobsAccordingToRecruiter)


module.exports = jobRouter