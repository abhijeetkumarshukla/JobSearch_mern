const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {type:String, required:true },
    company:{ type: mongoose.Schema.Types.ObjectId, ref: 'Company',  required:true },
    location:{type:String, required:true },
    jobType:{type:String, required:true },
    description: {type:String, required:true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  required:true }
});

const JobModel = mongoose.model('Job', JobSchema);

module.exports =  JobModel
