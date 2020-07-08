const mongoose = require('mongoose')

const URI = 'mongodb+srv://root:xQXOwUlvmSRS3BVH@cluster0.isjic.mongodb.net/users?retryWrites=true&w=majority'
const connectDB = async()=>
{
  await mongoose.connect(URI,{useNewUrlParser: true , useUnifiedTopology: true})
  console.log('db connected...')
}

module.exports=connectDB