const CompanyModel = require("../../models/company.model");

const companyCreate = async(req,res)=>{
    const {name,email,companyType,location,description,owner} = req.body;
    console.log(" req.body.user=> ",  req.body.user)
     const {userID} =  req.body.user
    try {
        
        const company = new CompanyModel({ name,email,companyType,location,description,  owner:userID });
        
        await company.save();
        return res.status(201).json({ message: "company Created" });
    } catch (error) {
        return res.status(500).json({ message: error });
        
    }
}


const getCompany = async (req,res)=>{
    try {

        const companys = await  CompanyModel.find();
        return res.status(200).json({ message: "company fetched ", data:companys });

    } catch (error) {
        return res.status(500).json({ message: error });

    }
}


const getCompaniesDropdown =async (req,res)=>{
    try {
        const { ownerId } = req.params;
        const companies = await CompanyModel.find({owner: ownerId})

        return res.status(201).json({ message: "company got success" , data:companies});

    } catch (error) {
        return res.status(500).json({ message: error });

    }
}


module.exports = {companyCreate, getCompany, getCompaniesDropdown};
