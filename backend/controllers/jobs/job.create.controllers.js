const JobModel = require("../../models/job.model");

const jobCreate = async (req, res) => {
    const {title,company,location,jobType,description} = req.body;
    const {userID} =  req.body.user
    try {
        
        const job = new JobModel({ title,company,location,jobType,description, postedBy:userID });
        
        await job.save();
        return res.status(201).json({ message: "Job Created" });
    } catch (error) {
        return res.status(500).json({ message: error });
        
    }

};

const getJobs = async (req,res)=>{
    try {

        const jobs = await JobModel.find();
        return res.status(200).json({ message: "Job fetched ", data:jobs });

    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}


module.exports = {jobCreate, getJobs};




// ///////

