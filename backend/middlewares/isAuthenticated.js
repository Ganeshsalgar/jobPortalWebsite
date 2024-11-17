import jwt from "jsonwebtoken";



const isAuthenticated = async (req, res , next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message : "User is not found.",
                success : false
            })
        }

        const decode = await jwt.verify(token , process.env.SECRETE_KEY);

        if(!decode){
            return res.status(401).json({
                message : "invalid Token",
                success : false
            })
        }

        req.id = decode.userId;

        next();

    } catch (error) {
        console.log("User authentication error" , error);
        
    }
}

export default isAuthenticated;