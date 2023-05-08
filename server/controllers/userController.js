const {createError} = require("../middlewares/ErrorHandler");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const { ganareteToken } = require("../services/TokenServices");

exports.register = async (req,res,next) => {
    const {email,name,password} = req.body;
    try{
        const user = await User.findOne({email})
        if(user) return next(createError(409,"User already registered."))
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,salt)
        const newUser = await User.create({
            email,name,password:hashPass
        })
        const data = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
        const token = ganareteToken(data)
        res.status(201).json({status: "success",message:"Registration successfull.",data:{
            ...data,
            token: token
        }})
    }catch(err){
        return next(err)
    }
}

exports.login = async (req,res,next) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user) return next(createError(404,"User not found."))

        const verityPass = await bcrypt.compare(password,user.password)
        if(!verityPass) {
            return next(createError(403,"Invalid password."))
        }
        const data = {
            id: user._id,
            name: user.name,
            email: user.email
        }
        const token = ganareteToken(data)
        res.status(200).json({status: "success",message:"Login successfull.",data:{
            ...data,
            token: token
        }})    }catch(err){
        return next(err)
    }
}

