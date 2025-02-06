const jwt = require('jsonwebtoken');

 const  RbacAuth  = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token==> ", token)
    console.log(token, req.headers)
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        req.body.user = decoded; 
        console.log("decoded=> ", decoded)
        if(decoded.role!=="recruiter"){

            
            return res.status(403).json({ message: "Access Denied" })
        }
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports =  RbacAuth