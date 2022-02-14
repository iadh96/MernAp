const express= require("express")

const { RegisterValidation, Validation, LoginValidation } = require("../middlewares/Register")
const { UserAuth } = require("../middlewares/UserAuth")
const { Register, Login } = require("../controllers/auth")
const AuthRoute= express.Router()


AuthRoute.post('/signUp', RegisterValidation, Validation ,Register )




AuthRoute.post('/signIn', LoginValidation,Validation,Login  )


AuthRoute.get('/current', UserAuth ,(req,res)=> res.send(req.user) )



module.exports=AuthRoute