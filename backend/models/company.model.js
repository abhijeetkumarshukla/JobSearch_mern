const mongoose = require("mongoose");


const companySchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    location:{type:String,required:true},
    companyType: {type:String,enum:["TECH", "NON_TECH"], default:"NON_TECH"},
    email:{type:String, unique:true,required:true},
    owner:{ type: mongoose.Schema.Types.ObjectId, ref: 'User',  required:true }
})

const CompanyModel = mongoose.model('Company',companySchema);

module.exports = CompanyModel;