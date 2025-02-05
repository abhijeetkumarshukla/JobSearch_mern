const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRouter = require('./routes/user.route');
const jobRouter = require('./routes/job.route');
const companyRouter = require('./routes/company.route');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/job',jobRouter)
app.use('/company',companyRouter)

 

app.listen(PORT, async() =>{
     try {
        await connection
        console.log(`Server running on port ${PORT} and DB is connected.`)
     } catch (error) {
        
     }
})
