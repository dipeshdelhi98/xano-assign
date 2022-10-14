const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstname:{
        type:String
    },

    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    role:{
        type:String,
        enum:['admin','regular_user']
    }
});


module.exports=new mongoose.model('userdata',userSchema)