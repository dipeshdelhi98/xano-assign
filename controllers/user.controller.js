const User=require('../models/user.db');
const jwt=require('jsonwebtoken')
const {
    validationforRegistrationDetails,
  } = require("../validators/user.validators");

module.exports={

    getToken:async (req,res,next)=>{

        try {

            const {id}=req.params

            const userdata=await User.findById(id)

            const token=jwt.sign({userId:userdata._id,role:userdata.role},"secret1234",{expiresIn:"1h"})

            
            return res.status(200).json({
                code: 'success',
                error: false,
                message: 'User Token',
                token:token
          })



     
          } catch(error) {
            return res.status(401).json({
              code: 'Failed',
              error: true,
              message: 'Something went wrong',
              data:error
            
            });
          }
        
    },

    add:async (req,res)=>{

        try{


            const { error, value } = validationforRegistrationDetails(req.body);  

            if (error) {
              console.log(error);
              return res.status(400).json({
                code: 'success',
                error: true,
                message: 'Invalid request body format',
                data:error.details[0].message,
              });
            }
 

            const userdata=new User(req.body);

            await userdata.save();

            const token=jwt.sign({userId:userdata._id,role:userdata.role},"secret1234",{expiresIn:"1h"})

              return res.status(200).json({
                code: 'success',
                error: false,
                message: 'New User Added Successfully',
                data:userdata,
                token:token
            })



        }catch(error){

            return res.status(400).json({
                code: 'failed',
                error: true,
                message:"Something went wrong",
                data:error
            })
        }
    },

    getById:async (req,res)=>{

        try{

            const {id}=req.params
       
            const userdata=await User.findById(id)


            return res.status(200).json({
                code: 'success',
                error: false,
                message: 'USer fect Successfully',
                data:userdata,
          })

    

        }catch(error){

            return res.status(400).json({
                code: 'failed',
                error: true,
                message:"Something went wrong",
                data:error
            })
        }
    },

    getAll:async (req,res)=>{

        try{
                
            const userdata=await User.find({})


            return res.status(200).json({
                code: 'success',
                error: false,
                message: 'Users Fetch Successsfully',
                data:userdata,
          })

    

        }catch(error){

            return res.status(400).json({
                code: 'failed',
                error: true,
                message:"Something went wrong",
                data:error
            })
        }
    },

    update:async (req,res)=>{

        try{

            const {id}=req.params
                
            const userdata=await User.findByIdAndUpdate(id,req.body);  


            return res.status(200).json({
                code: 'success',
                error: false,
                message:"Updated Successfully",
                data:userdata,
            
             
          })

    

        }catch(error){

            return res.status(400).json({
                code: 'failed',
                error: true,
                message:"Something went wrong",
                data:error
            })
        }
    },

    deletebyid:async (req,res)=>{

        try{

            const {id}=req.params
                
            const userdata=await User.findByIdAndDelete(id)


            return res.status(200).json({
                code: 'success',
                error: false,
                message:"Deleted",
             
          })

    

        }catch(error){

            return res.status(400).json({
                code: 'failed',
                error: true,
                message:"Something went wrong",
                data:error
            })
        }
    }
}