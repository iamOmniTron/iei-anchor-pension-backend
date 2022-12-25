const Admin = require("../models").Admin;
const {verify} = require("jsonwebtoken");
const SECRET = process.env.SECRET;


module.exports = {
    authenticateRequest: async(req,res,next)=>{
        try{
            const header = req.headers["authorization"];
            if(!header || typeof header !== "string"){
                return next("unauthenticated");
            }
            const token = header.split(" ")[1];
            if(!token || typeof token !== "string"){
                return next("unauthenticated");
            }
            const payload = verify(token,SECRET).userId;
            const account = Admin.find({where:{id:payload}});
            if(!account || account == undefined){
                return next("unauthenticated");
            }
            return next();
        }catch(err){
            return next(err);
        }
    }
}