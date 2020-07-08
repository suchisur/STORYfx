const mongoose=require('mongoose')

const User=mongoose.Schema({
    firstName :{
        type:String
    },
    lasstName :{
        type:String
    }
});

module.exports= User =mongoose,model('user',user)