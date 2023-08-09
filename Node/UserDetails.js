const mongoose = require('mongoose');

const UserDetailsSchema = new  mongoose.Schema({
    fname:String,
    lname:String,
    email:{ type: String, unique: true},
    password:String
},
{
    collection:"userinfo", //storing Schema in Collection
})

mongoose.model("userinfo",UserDetailsSchema); //schema will be added to these collection