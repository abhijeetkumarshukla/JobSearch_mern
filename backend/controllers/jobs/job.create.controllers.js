const { default: mongoose } = require("mongoose");
const JobModel = require("../../models/job.model");

const jobCreate = async (req, res) => {
    const {title,company,location,jobType,description} = req.body;
    const {userID} =  req.body.user
    try {
        
        const job = new JobModel({ title,company,location,jobType,description, postedBy:userID });
        
        await job.save();
        return res.status(201).json({ message: "Job Created" , success:true});
    } catch (error) {
        return res.status(500).json({ message: error, success:false });
        
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


const jobsAccordingToRecruiter = async (req,res)=>{
    try {
        const { recruiterId } = req.params;
        const spl = recruiterId.split(":")

        const jobs = await JobModel.find({postedBy: spl[1]})

      

console.log("jobs==> ", jobs)
        return res.status(200).json({ message: "Job fetched ", data:jobs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
// const getJob = async (req,res)=>{
    //     try {
        
//         const jobs = await JobModel.findById();
//         return res.status(200).json({ message: "Job fetched ", data:jobs });

//     } catch (error) {
//         return res.status(500).json({ message: error.message });

//     }
// }


module.exports = {jobCreate, getJobs,jobsAccordingToRecruiter};




// ///////

