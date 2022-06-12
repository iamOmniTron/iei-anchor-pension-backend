const Admin = require("../models").Admin;
const {compare} = require("bcrypt");
const {signToken} = require("../helpers");

module.exports = {
    login: async (req,res,next)=>{
        try{
            const {email,password} = req.body;
            if(!email || email == ""){
                return next("invalid emai;")
            }
            if(!password || password == ""){
                return next("invalid password");
            }
            const account = await Admin.findOne({where:{email}});
            if(!account || account == undefined){
                return next("invalid email/password");
            }
            const isPasswordMatch = await compare(password,account.password);
            if(!isPasswordMatch){
                return next("invalid email/password")
            }
            const token = signToken(account.id);

            return res.json({
                success:true,
                data:token
            })
        }catch(err){
            next(err);
        }
    }
}