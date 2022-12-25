require("dotenv").config();
const {sign} = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const EXPIRATION = process.env.TOKEN_EXPIRY|"2d"
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,file,done)=>done(null,"./public/images"),
    filename: (req,file,done)=> done(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
})

module.exports = {
    signToken : (payload)=>{
        return sign({userId:payload},SECRET,{expiresIn:EXPIRATION});
    },
    upload:multer({
        storage
    })
}
